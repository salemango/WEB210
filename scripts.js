
// Display project 1 info 

let project1card = document.getElementById("project1card");
let project1info = document.getElementById("project1info");
project1card.addEventListener("click", function() {
    project1info.classList.remove("nodisplay");
})

// Hide project 1 info 
let project1back = document.getElementById("project1back");
project1back.addEventListener("click", function() {
    project1info.classList.add("nodisplay");
})

// Show project 2 info
let project2card = document.getElementById("project2card");
let project2info = document.getElementById("project2info");
project2card.addEventListener("click", function() {
    project2info.classList.remove("nodisplay");
})

// Hide project 2 info
let project2back = document.getElementById("project2back");
project2back.addEventListener("click", function() {
    project2info.classList.add("nodisplay");
})

// Show project 3 info 
let project3card = document.getElementById("project3card");
let project3info = document.getElementById("project3info");
project3card.addEventListener("click", function() {
    project3info.classList.remove("nodisplay");
})

// Hide project 3 info 
let project3back = document.getElementById("project3back");
project3back.addEventListener("click", function() {
    project3info.classList.add("nodisplay");
})