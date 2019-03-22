
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
    constructor(){
        this.contextReferenceVariable= 5;
        this.aa = ()=>10;
        let aa = ()=>10;
        // return this.contextReferenceVariable;
        this.usesContextReference = (a, b) => {
            let _this = 3;
            let $this = 3;
            let bb = a.num + b.num;
            if(!this.aa){ //fails the regex for this, but not the rebinding method of testing.
                bb = a.num + b.num;
            }
            return bb;
        }
    }
    
}
const boundObject = new TestingContext();
// let 
// usesContextReference.bind(boundObject);
// console.log(boundObject.usesContextReference())
exports.usesContextReference = boundObject;