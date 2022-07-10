document.getElementById("head").addEventListener("click",(e)=>{
    console.log("You clicked this list");
    let a;
   // location.href = "https://www.google.com"; //this even will take me to google
   a = e.target; 
a = e.target.className; //returns class name of the selected item
a = e.target.classList;
//a = Array.from(a); //to print the classlist as array
a = e.target.id;

a = e.offsetX; //horizantal position
a = e.offsetY;  //vertical position
a = e.clientX; //position according to the window
a = e.clientY; //position according to the window

console.log(a);

let str = "hello";
str = Array.from(str); //changing into array
console.log(str); //will print string as array
}
)
// LEARN OTHER EVENTS FROM THE INTERNET 

let btn = document.getElementById("btn");
btn.addEventListener("click" , func1);

function func1(e){
   console.log(e) //will print all the methods of event object

   // if my input type is submit, then it will directly submit and it can cause error cause submitting is its default activity
   // even if we make a button and click it than it will produce error 
   e.preventDefault(); //use this to prevent default behaviour
}

document.querySelector(".this").addEventListener("mousemove", function(element){
   document.body.style.background = `rgb(${element.offsetX}, ${element.offsetX}, 154)`
})