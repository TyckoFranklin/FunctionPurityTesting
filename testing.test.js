let { isPure } = require('./index');
let { modifiesAnArgument, pureFunction, usesReference, usesContextReference } = require('./functionsToTest');





describe("purity", () => {
    // describe("Pure Function", () => {
    //     isPure(pureFunction, [{ num: 10 }, { num: 20 }], 30);
    // });
    // describe("Modifies Argument", () => {
    //     isPure(modifiesAnArgument, [{ num: 13 }, { num: 11 }]), 22;
    // });
    // describe("Uses References", () => {
    //     isPure(usesReference, [{ num: 14 }, { num: 9 }], 23);
    // });
    describe("Uses Class References", () => {
        try {
            isPure(usesContextReference.usesContextReference, [{ num: 5 }, { num: 7 }], 12);
        } catch (e) {
            console.log(e);
        }
    });
});