
exports.modifiesAnArgument = (a, b) => {
    a.num = a.num + 2;
    return a.num + b.num;
}
exports.pureFunction = (a, b) => {
    a.num = a.num;
    return a.num + b.num;
}
let referenceVariable = 17;
exports.usesReference = (a, b) => {
    return referenceVariable;
}

class TestingContext {
    constructor() {
        this.contextFunction = () => 10;
        this.usesContextReference = (a, b) => {
            let _this = 3; //passes the regex for this
            let $this = 3; //passes the regex for this
            let bb = a.num + b.num;
            if (!this.contextFunction) { //fails the regex for this, but not the rebinding method of testing.
                bb = a.num + b.num;
            }
            return bb;
        }
    }

}
const boundObject = new TestingContext();
exports.usesContextReference = boundObject;