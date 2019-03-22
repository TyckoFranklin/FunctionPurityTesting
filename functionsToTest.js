
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
        this.contextFunction = () => 0;
        this.contextBoolean = false;
        this.usesContextFunction = (a, b) => {
            let _this = 3; //passes the regex for this
            let $this = 3; //passes the regex for this
            let bb = a.num + b.num;
            if (this && Object.keys(this).length !== 0 && !this.contextFunction) { //fails the regex for this, but not the rebinding method of testing.
                bb = a.num + b.num + this.contextFunction();
            }
            return bb;
        }
        this.usesContextBoolean = (a, b) => {
            let _this = 3; //passes the regex for this
            let $this = 3; //passes the regex for this
            let bb = a.num + b.num;
            if (this && !this.contextBoolean) { //fails the regex for this, but not the rebinding method of testing.
                bb = a.num + b.num;
            }
            return bb;
        }
    }

}
const boundObject = new TestingContext();
exports.usesContextReference = boundObject;