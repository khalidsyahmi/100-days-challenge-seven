// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and
//    save it in a variable with a name of your choice

let headrOne = document.body.firstElementChild;
headrOne = document.body.children[0];
console.log(headrOne);
console.dir(headrOne);

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the
//    sibling element (i.e. the <p> element next to the <h1> element)

headrOne = document.body;
console.log(headrOne);
console.dir(headrOne);
//or method ?
headrOne = document.body.firstElementChild;
console.log(headrOne.parentElement);
console.dir(headrOne.parentElement);

console.log(headrOne.previousSibling); // element null = whitespace
console.log(headrOne.nextElementSibling);
//or drilling
headrOne = document.body.children[1];
console.log(headrOne);

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)

let hrUno = document.getElementById("The Header");
console.log(hrUno);
console.dir(hrUno);

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class)
//    and store it in a new variable with a name of your choice

let parAnch = document.querySelector("body a");
console.log(parAnch);
console.dir(parAnch);

//query with class
let classPara = document.querySelector(".pr-in-p");
console.log(classPara);
console.dir(classPara);

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

classPara.textContent = " A paragraph sentence in element array 2";

parAnch.textContent = "The text has been changed";
console.log(parAnch);
console.dir(parAnch);
// it literally removes p element and change it to just text
// if parent p element has child element it deletes it during change
