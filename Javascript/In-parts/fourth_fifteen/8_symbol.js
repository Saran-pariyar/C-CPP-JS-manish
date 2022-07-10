//symbols = they are primitive data type, like bool,string and int
//use symbols to make unique datas
const sym1 = Symbol("my identifier");
const sym2 = Symbol("my identifier2");
console.log("symbol is", sym1);
console.log(sym1 === sym2);
//that will return false like other primitve data types
const a = "this ";
const b = "this";
console.log(a === b); //each var have unique keys
console.log(null === null); //returns
console.log(undefined === undefined); //returns true

const k1 = Symbol("identifier of k1");
const k2 = Symbol("identifier of k2");
myobj = {};
myobj[k1] = "harry";
myobj[k2] = "rohan";

console.log(myobj);
console.log((myobj[k2]));
// we cant do this
// console.log((myobj.k2));

// for..in loops ignore symbols 
for(key in myobj){
    console.log(key, myobj[key])
}

console.log(JSON.stringify(myobj))