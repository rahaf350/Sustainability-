/*global console, alert, prompt, calc, document, massge, adddlert, getElementsByClassName*/


//open Responsive Navigation
function openNav() {
    "use strict";
    document.getElementById("Sidenav").style.width = "250px";
}

function closeNav() {
    "use strict";
    document.getElementById("Sidenav").style.width = "0";
}

var signUp = document.getElementsByClassName("button3");
var form = document.getElementsByClassName("row3");
signUp.onclick = function () {
    "use strict";
    form.style.display = none;
};

//open Responsive Apout Navigation
$(document).ready(function () {
    
    "use strict";
    
    $(".about").click(function () {
        $(".drop_down2").animate({
            height: 'toggle'
        });
    });
});

 // Add smooth scrolling to Learn more button
$(document).ready(function () {
    
    "use strict";
    
    $(".learnMore").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
        
    });
});

//hiding placeholder when click on it
var placeHolder = document.getElementsByClassName("data-place");
var i;
for (i = 0; i < placeHolder.length; i++) {
placeHolder[i].onfocus = function () {
    "use dtrict";
    //store placeholder
    this.setAttribute("data",this.getAttribute("placeholder"));
    this.setAttribute("placeholder", " ");
};

//get placeholder
placeHolder[i].onblur = function () {
    "use dtrict";
    //store placeholder
    this.setAttribute("placeholder",this.getAttribute("data"));
    this.setAttribute("data", " ");
};
}