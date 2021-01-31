/*global console, alert, prompt, calc, document, massge, adddlert, getElementsByClassName*/

var navButton = document.getElementById("navButton"),
    navDrop = document.getElementById("navDrop"),
    closer = document.getElementById("closer");

navButton.onclick = function () {
    "use strict";
    navDrop.style.display = "block";
};

closer.onclick = function () {
    "use strict";
    navDrop.style.display = "none";
};