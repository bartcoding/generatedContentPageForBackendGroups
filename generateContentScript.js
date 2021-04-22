const h1Element = document.createElement("h1");
const contentOfH1Element = document.createTextNode("welcome to my crazy page");
h1Element.appendChild(contentOfH1Element);

const body = document.querySelector("body");
body.appendChild(h1Element);

body.style.backgroundColor = 'blue';
body.style.color = 'white';