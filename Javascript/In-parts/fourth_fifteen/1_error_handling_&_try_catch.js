
function try_catch(){
let a = 10;
a = undefined; //we did this because the below codes were not working because of the if statement error 
if (a != undefined) {
  throw new Error("this variable is not undefined"); //use if you want to throw a custom error
  //eg. if you request something to the server and it does not give it to you than use custom error
} else {
  console.log("This is undefined");
}

try {
    console.log("There is no error inside the try block")
    usless_func(); //if there is no function like this than the catch will be executed
} catch (error) {
    console.log("This is catch block");
    console.log(error); //this will return where is the error in my try block
    console.log(error.name); //returns the name of error
    console.log(error.message); //this will return message of error
}
finally{
    //even if there is error in try or not, the finally block will run
    console.log("This will run anyway")
}

}
try_catch();