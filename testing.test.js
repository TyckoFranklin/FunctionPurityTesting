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
    describe("Uses this Context For Conditionals", () => {
        isPure(usesContextReference.usesContextBoolean, [{ num: 5 }, { num: 7 }], 12);
    });
    describe("Uses this Context For Function Calls", () => {
        isPure(usesContextReference.usesContextFunction, [{ num: 5 }, { num: 7 }], 12);
    });
});