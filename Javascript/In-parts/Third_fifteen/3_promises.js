function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Your promise  resolved");
        resolve();
      } else {
        console.log("Promise not resolved");
        reject("sorry ..this is 'reject' ");
      }
    }, 2000);
  });
}

// function inside then is 'resolve ' and function inside catch is 'reject'
func1().then(function () {
    console.log("Harry: Thanks for resolving");
  })
  .catch(function (error) {
    console.log("Very bad news. Reason:", error);
  });

//   Arrow function
const harry = () =>{return "hello";}
let har = () => "this is new" ; //will return this string
const obj = ({name:"saran"}) //we have to put inside the bracket if we want to use arrow func in object
let func_1  = name => {"hello " + name} //we can leave paranthesis if the argument is only one
