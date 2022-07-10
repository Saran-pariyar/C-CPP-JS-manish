
function selecting(){
let a = document.all; //will return all the tags in the document
//a = document.body; //will give all the elements in the body 
Array.from(a).forEach(function(e){
     console.log(e);
    // using this loop will change the element into the array and then displays it   
})
 console.log(a)
}
function links_related(){
console.log(document.links[0].href) //link[0] will give the link with its tag and .href will give the link 
}
function image_methods(){
document.images.length;
document.images.item(0); //this will return the first image i.e. first img tag
document.images.namedItem("hello"); // will return the img tag with the id "hello"
}
function script_method(){
    let x = document.scripts[0].text; //get content of first script in document
    document.scripts.length;
document.scripts.item(0); //this will return the first script i.e. first script tag
document.scripts.namedItem("hello"); // will return the script tag with the id "hello"
}

function selectors(){
    let ele = document.getElementsByClassName("child")
    let first = document.getElementById("first")
    first = first.parentElement;
    console.log(first)
    //to return as array (more structured) use this loop
    Array.from(ele).forEach(function(c){
        console.log(c)
    }) 
    let query_select = document.querySelector(".child") //selects first matching element
    console.log(query_select)
}
selectors()