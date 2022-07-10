myBtn = document.getElementById("myBtn");
content = document.getElementById("content");

//we have to use two 'then' in fetch API
function getdata() {
  console.log("Starting get data");
  URL = "harry.txt";
  // the cosole log inside this 'fetch will come at last because it is asychronos and will go in background while other is being executed'
  fetch(URL)
    .then((response) => {
      console.log("Inside First then");
      return response.text();
    })
    .then((data) => {
      console.log("Inside second then");
      console.log(data);
    });
}
console.log("Before get data");
getdata();
console.log("After get data");


//just literally memorize these two function to getdata() and postdata() and don't go in too much depth 
/*

function getData(){
    console.log("Started getData")
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.json();
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data);
    })
}


function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"harglry347485945","salary":"123","age":"23"}'
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data => console.log(data)
    )
}

*/
