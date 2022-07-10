let obj = {
    name: "saran",
    location: 'Ilam',
    roll_no: 10
}
for (let num in obj) {
    console.log(`the value of ${num}  is ${obj[num]} `)
}

let arr = [1, 2, 3, 4];
arr.forEach(function (element, index, array) {
    console.log(element , index , array);
})

function func() {
    let name = "this is the returned value"
   // console.log("This will have no output if we put this function in a variable and console.log from that variable")
    return name;
                }
//func(); // this will not give us the return value 
let store_func = func();
console.log(store_func); //now it will output the return value and not console.log
//but if we try to console.log a functoin of an object than it will only ouput the return value

let myobj = {
    person: "saran",
    method: function () { console.log("This is console.log");   return "GTA" }
}
console.log(myobj.method()) //this will also output only the return type of the method of the object
 
//we can use forof for strings and arrays 
let ar = [1,2,3,4];
 for (const flo of ar) {
     console.log(flo)
 }
 let str = "this is a string";
 for (const fle of str){
    console.log(fle)
 }
//using the for in loop
/*
let new_obj = {name:"saran", roll_no:278}
for (let key in new_obj){
console.log(obj[key]);
}
let new_string = "Hello this is a string";
for (let char in new_string){
console.log(new_string[char]);
}
*/