//maps  came with escma  
//we can use fucntion, string, blank object, any type of data as a key or value

const myMap = new Map();
console.log(myMap);

let key1 = "myStr";
let key2 = {}; //blank obj
let key3 = ()=>{}; //blank func

//setting map value
myMap.set(key1, "this is string")
myMap.set(key2, "this is obj")
myMap.set(key3, "this is function")

console.log(myMap);

//getting value from map
let value1 = myMap.get(key1)
console.log(value1)

//getting size of the map
console.log(myMap.size)

//you can loop using for..of to get keys and value
for(let key of myMap){
    console.log(key)
}
//to print only keys
for(let key of myMap.keys()){
    console.log("key is ", key)
}
console.log("\n Now foreach loop")
//you can also use foreach loop
myMap.forEach((value,keya)=>{
    console.log("key is",keya);
    console.log("value is " , value)
})


//converting map into Array
let new_arr = Array.from(myMap);
console.log("map to array is " , new_arr);

//converting map keys into array
let keys_arr = Array.from(myMap.keys());
console.log("map keys to array is " , keys_arr);


//converting map value into array
let value_arr = Array.from(myMap.values());
console.log("map to values array is " , value_arr);