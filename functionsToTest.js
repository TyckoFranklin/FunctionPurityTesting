
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
        let aa = ()=>10;
        // return this.contextReferenceVariable;
        this.usesContextReference = (a, b) => {
            let somethingthis = {};
            somethingthis.a = 10;
            return aa();
        }
    }
    
}
const boundObject = new TestingContext();
// let 
// usesContextReference.bind(boundObject);
// console.log(boundObject.usesContextReference())
exports.usesContextReference = boundObject;