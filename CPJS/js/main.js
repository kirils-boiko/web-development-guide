console.log("Welcome");

// const header1 = document.getElementById("header-1");
// header1.textContent = "Hello there!";

// const content1 = document.querySelector("#content-1");
// const age = prompt("What is your age?");

// console.log(age);
// content1.textContent = `Your age is ${age}`;

// Function examples
// function greeting() {
//    const name = prompt("What is your name?");
//    const result = `Hello ${name}!`;
//    return result; 
// }

//console.log(greeting());

// function fullGreeting(firstName, lastName) {
//     const result = `Welcome to JS Crash Course, ${firstName} ${lastName}!`;
//     return result;
// }

// const name = prompt("What is your full name?");
// const namArr = name.split(" ");
// const greeting = fullGreeting(namArr[0], namArr[1]);
// console.log(greeting);
// const header1 = document.querySelector("#header-1");
// header1.textContent = greeting;

// Common string methods (methods are not in-place)
const orc = "Thrall";
console.log(orc.length);
console.log(orc.indexOf("rall"));
console.log(orc.replace("T", "F"));
console.log(orc.toUpperCase());
console.log(orc.toLowerCase());
console.log(orc.slice(2, 5));
console.log(orc.charAt(2));
console.log(orc[2]);
console.log(orc.split("r"));
console.log((orc.split("r").join("")));

