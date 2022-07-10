const name = 'Harry';
const greeting = 'Good Morning';
// console.log(greeting + ' ' + name);

let html;
html  = "<h1> this is heading</h1>" + "<p> this is My para</p>";

html = html.concat('this' ,"new" , "add"); //this all will be added in the string
console.log(html)
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[1]);
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('>'));
console.log(html.charAt(3)); //will return char at index 3 
console.log(html.endsWith('dsfsdfd'));
console.log(html.includes(' fg'));
console.log(html.substring(0,6)); //this and slice is same but we can give negative values in the slice method
console.log(html.slice(0, 4)) //if we give here -4 as value than it will give that last four element 
console.log(html.split('>')); //split breaks stings into arrays where there is spaces .... this will split the palces where there is ">"
console.log(html.replace('this', 'it')); //this will replace "this " with "it"     
console.log(html) //no change in real string_var because we just have console.logged all the things above
// document.body.innerHTML = myHtml;            
