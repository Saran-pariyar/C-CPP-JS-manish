                                    // TYPE CONVERSION 
//NAN = NOT A NUMBER
let num_var = 1;
let string_var = String(num_var); //one way of making string variable
let another_way = String(20)
// you can change any varible into string using String() method 
let bool_var =String( true);
console.log(bool_var , typeof(bool_var)) //we can also change bool into string

let arr = String([1,2,3,4]); //will convert array into string
console.log(arr, "   " ,arr.length ,"   " ,  (typeof arr))  //the length will print 7 because it also counts comma(,) as a character

//we can also use this to change it into string
let i = 10; 
i.toString();
console.log(typeof i) //did not change into string it show number only
//we can only use tostring if the value is defined and we can use string method even if the value is undefined or null

//CAHNGE INTO NUMBER
let string_num = Number("2345"); //now it change into number var //if there is any character here than it will print NAN when we console.log it
 string_num = Number(true); //it will prnt 1
console.log(string_num, typeof string_num)


let parse_var = parseInt('34.3535'); //converts into  integer 
parse_var = parseFloat('34.3535'); //will convert into float
console.log(parse_var);
console.log(parse_var.toFixed(2)) //print first 2 numbers after decimal points

//EXTRA

let mystr = Number("6998");
let mynum = 34;
console.log(mystr + mynum) //will print the sum
//if not used Number method than it will add both as string

