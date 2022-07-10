console.log("Welcome to Note App");
showNotes();
let addBtn = document.getElementById("addBtn")
let addTxt = document.getElementById("addTxt")

addBtn.addEventListener("click", function (e) {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
    // console.log(notesobj)

    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";

    notesobj.forEach(function (element, index) {
        html += `  <div class="noteCard card my-2 mx-2" style="width: 18rem;">
<div class="card-body " >
  <h5 class=" card-title">Note- ${index + 1} </h5>
  <p class="card-text">${element}</p>
  <a href="#" class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)" >Delete Note</a>
</div>
</div>`

    })
    let notesElem = document.getElementById("notes");
    if (notesobj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML = `Nothing to show "Add a Note" section to add notes`
    }
}

function deleteNote(index) {
    // console.log("in delete  ", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();

}
let search = document.getElementById("searchTxt");
search.addEventListener("input", function(){
    let inputval = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})

/* Features to add
1. Tick the completed task
2. Important task highlight
3. Seperate notes by user


*/