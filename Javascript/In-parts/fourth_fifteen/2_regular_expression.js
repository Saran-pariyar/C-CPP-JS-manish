//use ctrl + f to find anything in the page and also replace it
// if we want to have different result if there is more than once matching than we have to write 'g' beside literal 

/*
g means global
i means case insensative 
*/
let rglur_exp_var = /harry/g; //this is regular expression literal in js
//rglur_exp_var = /harry/i; //this means it is not case sensitive 
console.log(rglur_exp_var);
console.log(rglur_exp_var.source); //shows the content inside the literal

let s = "this is a great code with harry and harry is awesome";
//func to match expressions
// 1. exec() = returns arry for match and null for no match

let result = rglur_exp_var.exec(s);
console.log(result);
console.log(result.index);
console.log(result.input);


 result = rglur_exp_var.exec(s);
console.log(result); //now this will give value of second 'harry'

 result = rglur_exp_var.exec(s);
console.log(result); //there is no harry left so it will return null

let test = rglur_exp_var.test(s)
console.log(test); //wil returns true if it is availabe inside the string

// match()
//match will return array if the item is available otherwise null
//let result3 = rglur_exp_var.match(s); //wrong way
let result3 = s.match(rglur_exp_var);
console.log(result3);


//search()
//will return -1 if there is no matching item
//let result4 = rglur_exp_var.search(s); //wrong way
let str = "This is harry and harry";
let result4 = str.search(rglur_exp_var);
console.log(result4); //returns the index of first matching item

//replace()
//returns new replace string replaced with replacement
let result5 = str.replace(rglur_exp_var,"replaced_item");
console.log(result5) //if we not used the /harry/g =global flag than it would only replace the first matching item