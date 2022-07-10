console.log("This is tut20");
//LS will stay even if we commented the code with local storage or restart the browser but session storage will be gone if we removed the code 
//We can only remove the local storage if we use the code localstorage.clear
//all the methods that we used for local storage can be used for session storage 


 localStorage.setItem("Name" , "Harry");
 localStorage.setItem("Name2", "Rohan");
 
 let name = localStorage.getItem("Name"); //if we try to getitem which !exist on local storage than it  return "null"

 // localStorage.removeItem("Name2") //remove one item
 // localStorage.clear(); // clear all  items  from 

//  if we try to store array in local storage than it will convert it into string 
// so we have to first convert it into string and than later convert it into array using JSON 

let arr = ["one", "two" , "three"];
// localStorage.setItem("myarr", arr); //it has now converted the array into string

localStorage.setItem("myarr" , JSON.stringify(arr)); //now we can convert it into array later

let local_arr = JSON.parse(localStorage.getItem("myarr")); //converted into string
