let body = document.querySelector("body");
body.style.backgroundColor = " black"
body.style.color = " green"

let div = document.getElementsByClassName("for_3");
let height = window.innerHeight;
let width = window.innerWidth;
let scrollright = scrollX;
let scrolldown = scrollY;

div.innerHTML = `<p> The inner height of this window is ${height} and the inner width is ${width}  
    <p> Scroll X means scrolling right and its value is  ${scrollright} and scroll y means down and value is ${scrolldown}  `

function location_related() {
    loca = location; //
    loca_href = location.href;  //gives address of the current page
    location.href = "https://www.google.com"; //takes you to google
    loca_href = location.toString();  //gives address of current page as a string
}
function history() {
    history; //will gives info of the all history
    history.back; //will take you back to previous page or change
    history.go(-1) //will take you back one time, +1 or +2 will make you go forwared in history
}


