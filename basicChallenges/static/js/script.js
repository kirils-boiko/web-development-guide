//alert('hello');
//console.log('hello');

// Challenge 1: Your Age in Days

var daysInYear = 365;
var currentYear = 2021;

function calculateDays() {
    var birthYear = prompt("What year were you born?");
    var ageInDays = (currentYear - birthYear) * daysInYear;
    var h3 = document.createElement("h3");  // create a new HTML header 2
    var textAnswer = document.createTextNode("You are ca. " + ageInDays + " days old"); // create a string
    h3.setAttribute("id", "ageInDays");     // add an attribute to the header 2
    h3.appendChild(textAnswer);             // append a string inside of header 2 element you created
    document.getElementById("flex-box-result").appendChild(h3); // append header 2 inside div with id of flex-box-result
    console.log(ageInDays);
}

function reset() {
    document.getElementById("ageInDays").remove();
}

function updateDiv() {
   
}

function generateCat() {
    var image = document.createElement("img");
    var div = document.getElementById("cat-location");
    image.setAttribute("class", "image");
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small" + "&d=" + new Date().getTime();
    div.replaceChildren(image);
}


// Challenge 2: Cat Generator
