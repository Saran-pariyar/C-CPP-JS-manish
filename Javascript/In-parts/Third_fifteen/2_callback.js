//A function inside a function is called callback function

//pretending this array is  data comming from server
let student_arr = [
  { name: "saran", language: "javascript" },
  { name: "manish", language: "python" },
];

function enrollstudent(student, callback) {
  setTimeout(function () {
    student_arr.push(student);
    console.log("enrollstudent() just been executed");
    callback(); //this will call the function only after the above one are being executed
  }, 8000);
}

function getstudent() {
  setTimeout(function () {
    let str = "";
    student_arr.forEach(function (element) {
      str += `<li>${element.name} </li>`;
      document.getElementById("student_list").innerHTML = str;
      console.log("getstudent() just been executed");
    });
  }, 5000);
}

let newstudent = { name: "harry", language: "All" }; //the new student name will not appear because getstudent is call time is 1 sec but enrol student is 3 sec that means the getstudent() function will run before enroll student
enrollstudent(newstudent, getstudent); //now the getstudent will be called after newstudent because of callback function
