//learn it later but don't skip this
//not completed

//async will return a promise and by using async..we don't have to write 2 'then' in promise


async function harry() {
  console.log("Inside Harry function");
const Response = await fetch("https://api.github.com/users")
console.log("before response")
const users = await Response.json()
console.log('users resolved')  


return users;
}

console.log("before calling harry");
let a = harry();
console.log("After calling harry");
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file");
