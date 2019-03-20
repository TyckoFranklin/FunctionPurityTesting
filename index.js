
let _ = require('lodash');
let deepFreeze = require('deepfreeze');

const checkChangedArguments = (fn) => {
    return function comparedArguments() {
        let args = _.toArray(arguments);
        let passed = args.map(_.cloneDeep);
        deepFreeze(args);
        let result = fn.apply(null, passed);
        let changed = !_.isEqual(args, passed);
        /* Were Arguments Modified?  */
        expect(changed).toEqual(false);
        return result;
    }
}

const destroyLexicalScope = (fn) => {
    return new Function('return (' + fn.toString() + ').apply(null, arguments);');
}

const isPure = (fn, args, output) => {

    it("Verify Function Doesn't Modify Arguments", () => {
        let localArgs = args.map(_.cloneDeep);
        let testing = checkChangedArguments(fn)
        testing(...localArgs);
    });
    it("Verify Function Doesn't Use References", () => {
        let localArgs = args.map(_.cloneDeep);
        let testing = destroyLexicalScope(fn);
        expect(fn.toString().search(/[={} :;\r\n><]+this./)).toEqual(-1);
        expect(() => {
            testing(...localArgs);
        }).not.toThrow("is not defined");
    });
    it("Verify Function Output matches for the supplied Output for the supplied Input", () => {
        let localArgs = args.map(_.cloneDeep);
        let localOutput = fn(...localArgs);
        expect(localOutput).toEqual(output);
    });
}

module.exports = {
    isPure,
}