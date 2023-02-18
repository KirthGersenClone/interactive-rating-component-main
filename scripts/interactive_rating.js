const eEersteScherm = document.querySelector(".eersteScherm");
const eTweedeScherm = document.querySelector(".tweedeScherm");
let nWaardering = document.getElementById("waardering");
// Event listener for the button
const element = document.getElementById("submit");
element.addEventListener("click", myFunction);

function myFunction() {
  eEersteScherm.classList.add("verborgen");
  eTweedeScherm.classList.remove("verborgen");
}

const myDiv = document.getElementById("myDiv");
const buttons = myDiv.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    console.log("Button " + (i + 1) + " clicked");
    // Add your code here to handle the button click event
    nWaardering.innerHTML = i + 1;
  });
}
