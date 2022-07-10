// HTTP response status codes
// Informational responses ( 100 – 199 )
// Successful responses ( 200 – 299 )
// Redirects ( 300 – 399 )
// Client errors ( 400 – 499 )
// Server errors ( 500 – 599 )

let fetchBtn = document.getElementById("fetchBtn");

fetchBtn.addEventListener("click" , btnClickHandler);

function btnClickHandler(){
    console.log("You have clicked FetchBtn")
//instantiate xhr obj
const xhr = new XMLHttpRequest();

//open the obj
xhr.open("GET", "harry.txt" , true) //the true means we want it to be asynchronos and continue to open other loaded content and don't lock the page
//on progress
xhr.onprogress = function(){
    console.log("On progress")
}
//after it is loaded
xhr.onload = function (){
    if(this.status === 200){
    console.log(this.responseText)
    }
    else{
        console.log("There is an error! check the spelling of the .txt file")
    }
}
//sending the request
xhr.send(); //imp
console.log("we are done //this will show in middle because we have made asyncgronus= true ")
console.log("this means other content will be shown while other files are being loaded ")

}


// if you want to get data from a json ...first it will get the data as a string..
//so yu have to parse it

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}
