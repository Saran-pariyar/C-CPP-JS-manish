let element = document.createElement("li")

element.className="childu1";
element.id = "createLi"
element.setAttribute("title", "mytitle")
element.innerHTML= "<i>This is added list </i>";


//we can use this to add text inside the element instead of inner html
let text = document.createTextNode(` "and this is a text added by text node"`)
element.appendChild(text)

let ul = document.querySelector("ul.this") //selects first ul with "this" class


console.log(element);
ul.appendChild(element) //will add element to ul list

let element2 = document.createElement("h1");
element2.innerText = "replaced heading"
element.replaceWith(element2);

//we can also replace child 
let myul = document.getElementById("myul");
//comment them out and see live changes by spliting screen 50 50 using live server
// myul.replaceChild( element , document.getElementById("fui")) //this must be a child otherwise it will throw error
// myul.removeChild(document.getElementById("lui"));

let get_attri = element.getAttribute("class");
console.log(element);
console.log(get_attri);
 get_attri = element.hasAttribute("class"); //if it has this attribute than it will return true
console.log(get_attri);
// element.removeAttribute("class")
console.log(element)

