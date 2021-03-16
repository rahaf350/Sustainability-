//Calculate the number of characters
var textArea = document.getElementById("message"),
    numOfChar = document.getElementById("numOfChar");

textArea.onkeyup = function () {
    "use strict";
    numOfChar.textContent = 240 - this.value.length;

    numOfChar.textContent < 0 ? numOfChar.style.color = "red" : numOfChar.style.color = "black";
    
};