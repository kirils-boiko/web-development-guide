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
// const orc = "Thrall";
// console.log(orc.length);
// console.log(orc.indexOf("rall"));
// console.log(orc.replace("T", "F"));
// console.log(orc.toUpperCase());
// console.log(orc.toLowerCase());
// console.log(orc.slice(2, 5));
// console.log(orc.charAt(2));
// console.log(orc[2]);
// console.log(orc.split("r"));
// console.log((orc.split("r").join("")));

// Arrays and common methods
// let scouts = ["Armin", "Mikasa", "Hange", "Jean"];
// console.log(scouts.toString());
// console.log(scouts.join(" | "));
// console.log(scouts.pop());          // inplace
// console.log(scouts.push("Levi"), scouts);       // inplace
// scouts[4] = "Erwin";
// console.log(scouts);
// console.log(scouts.shift(), scouts);
// console.log(scouts.unshift("Eren"));
// console.log(scouts);

// let moreScouts = ["Marco", "Krista", "Reiner"];
// let allScouts = scouts.concat(moreScouts);
// console.log(allScouts);
// console.log(allScouts.slice(0,4));
// console.log(allScouts.reverse());
// console.log(allScouts.sort());

// const numbers = [1, 2, 3, 4, 8, 9, 2, 14, 7];
// console.log(numbers);
// console.log(numbers.sort((a,b) => a-b));    // ascending
// console.log(numbers.sort((a,b) => b-a));    // descending

// let emptyArr = [];
// console.log(emptyArr);
// for (let num = 0; num < 10; num++) {
//     emptyArr.push(num);
// }
// console.log(emptyArr);


// Object Literals
// const student = {
//     first: "Kirils",
//     last: "Boiko",
//     age:23,
//     program: "Web Development",
//     getInfo: function() {
//         return `Name: ${this.first} ${this.last}\nAge: ${this.age}\nProgram: ${this.program}`;
//     }
// };

// student.fullName = function () {
//     return this.first + " " + this.last;
// }

// console.log(student.first);
// student.last = "Smith";
// console.log(student.last);
// student.age++;
// console.log(student.age);
// console.log(student.fullName());
// console.log(student.getInfo());


// JSON
// used in API to carry information (it's lightweight)
// fetching the json file requires the server to be up and running
//  it might be the local server btw
fetch("./json/shinobi.json")
    .then(results => results.json())
    .then(console.log);

    