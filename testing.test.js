let { isPure } = require('./index');
let { modifiesAnArgument, pureFunction, usesReference, usesContextReference } = require('./functionsToTest');

describe("purity", () => {
    describe("Pure Function", () => {
        isPure(pureFunction, [{ num: 10 }, { num: 20 }], 30);
    });
    describe("Modifies Argument", () => {
        isPure(modifiesAnArgument, [{ num: 13 }, { num: 11 }], 26);
    });
    describe("Uses References", () => {
        isPure(usesReference, [{ num: 10 }, { num: 7 }], 17);
    });
    describe("Uses Class References", () => {

        isPure(usesContextReference.usesContextReference, [{ num: 5 }, { num: 7 }], 12);
    });
});