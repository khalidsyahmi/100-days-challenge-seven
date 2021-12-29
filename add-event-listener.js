//click
let clickHere = document.body.querySelector(".clickity-clack");

function clickWord() {
  clickHere.textContent = "Clicked!";
  console.log(keyStroke);
}

clickHere.addEventListener("click", clickWord);

// input

let inputElement = document.getElementById("product-name");

function keyPresses(event) {
  /* let enteredText = inputElement.value; */
  /* console.log(enteredText); */
  /* let enteredText = event.data; */ //single strokes
  let enteredText = event.target.value; // all
  console.log(enteredText);
}

inputElement.addEventListener("input", keyPresses);
