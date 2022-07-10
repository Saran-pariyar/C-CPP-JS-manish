const getText = document.getElementById("getText");
const select = document.getElementById("selectBtn");

const result = document.getElementById("result")
const new_div = document.createElement("div")//creating element
new_div.setAttribute("id","created_div");
    
result.appendChild(new_div);// adding into resut div    
var text_val = new_div.innertext;
 //get item value
 

select.addEventListener("click",function(e){
   e.preventDefault() 
     new_div.innerText = getText.value; //to add the value in the innerHTML of our created div
 getText.setAttribute("placeholder","The text has been saved")
 console.log(getText.value.slice(0,5));
 console.log(getText.value.split("c"));
 console.log(getText.value.splice(2,4));
 console.log(getText.value.includes("a"));
 console.log(getText.value.replace("a","z"));


 

})






const slice = document.getElementById("slice");
const splice = document.getElementById("splice");
const replace = document.getElementById("replace");
const split = document.getElementById("split");
