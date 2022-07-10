//sets stores unique values

const mySet = new Set(); //initializing a empty set

mySet.add("This "); //set does not let anything repeat
mySet.add("This ");
mySet.add("My name");
mySet.add(true);
//sets remove repeated value and only stores unique values
console.log(mySet);

//we can do it by also using constructer
let myset2 = new Set([1, "value", false, { name: "saran" }, "value"]); //this will not store repeated item twice "value"
console.log(myset2);
console.log(myset2.size);
console.log(myset2.has("value")); //if the set has the items or not

// removing items
console.log("before removal", myset2, myset2.has(1));
myset2.delete(1);
console.log("after removal", myset2, myset2.has(1));

console.log("\n")
console.log("")

//itrating a set
for (let item of myset2) {
  // console.log("item is :",item)
}
myset2.forEach((item) => {
//   console.log("item is :", item);
});
//with array.from
// these are not correct 

// Array.from(myset2).forEach((item)=>{
//console.log('Set to array is', myArray)
// });
// let myArray = Array.from(myset2);
//console.log('Set to array is', myArray)