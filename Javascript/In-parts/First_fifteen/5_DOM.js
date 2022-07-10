
function basic_selector(){
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
console.log(parent.childNodes); //also count comments as element
console.log(parent.children); //ignore comments

let nodeName = parent.childNodes[1].nodeName;
console.log(nodeName) //returns the name of node in second line

let nodetype = parent.childNodes[1].nodeType;
console.log(nodetype) //returns the type of node in second line

/* Nodetype rules 
 1 = element
 2 = attribute
 3 = text Node
 8 = comment
 5 = document
10 = doctype
*/
}     
basic_selector();