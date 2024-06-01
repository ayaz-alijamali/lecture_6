// DOM__________ document object Model

let h2 = document.querySelector("h2");
console.dir(h2);

h2.innerText = h2.innerText + " jab tak sekhy gi nhi tab tak chorrigy nhi !";

let divs = document.querySelectorAll(".box");

let idx = 1;

for( div of divs) {
    div.innerText = `new unique value ${idx}`
    idx ++;
};