console.log("Hello World");
// console.error("This is an error");
// console.warn("This is a warning");

//---------------------------------------------------------------
// Three ways to deal with variables: var, let, const;
//  var is globally scoped - might want to avoid that;
//  let is a reassignable locally scoped variable - use that instead;
//  const is non-reassignable locally scoped variable;
//  use const unless you know you gonna reassign;

// let gameScore = 0;
// const constAge = 30;

// console.log(gameScore);
// console.log(constAge);

//---------------------------------------------------------------
// Primite data types (directly assigned to memory): String, Numbers, Boolean, null, undefined, Symbol

// const name = "Kirils";
// const age = 40;
// const rating = 4.8;     // there is no float in JS
// const isTrue = true;
// const x = null;         // basically empty
// const y = undefined;
// let z;                  // implicitly undefined

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isTrue);
// console.log(typeof x);  // bogus - it's not an object, it's just null
// console.log(typeof y);
// console.log(typeof z);

//---------------------------------------------------------------
// Concatenation and Template Strings

// const name = "Kirils";
// const age = 30;
// const hashtags = "technology, tech, computers, it, code, programming";

// console.log("My name is " + name + " and I am " + age);     // real pain with long strings
// console.log(`My name is ${name} and I am ${age} years old`);    // template strings

// const hello = `Hello World, I am ${name}`;
// console.log(hello);
// console.log(`Length of the string above: ${hello.length}`);
// console.log(`Same string in lowercase: ${hello.toLocaleLowerCase()}`);
// console.log(`Substring of the previous string: ${hello.substring(0, 5).toUpperCase()}`);
// console.log(`Name string split into array by character: ${name.split('')}`);
// console.log(`Hashtags string split by comma: ${hashtags.split(', ')}`);

//---------------------------------------------------------------
// Arrays
// Note that in JS you can have multiple types in a single array;
// JS is not statically typed, instead it is dynamically typed;
// TypeScript is a statically typed superset of JS;

// const numbers = new Array(666, 777, 888, 999);          // unpopular method
// console.log(numbers);

// const popularNumbers = [111, 333, 666, 777];            // common method
// console.log(popularNumbers);

// const whatTheHeck = [111, "any type", "you want", 'b', 0, 'y', true];
// console.log(whatTheHeck);

// console.log(whatTheHeck[2]);                            // indexing into array works

// you can work with const Array, meaning that you can add, remove elements, etc.
// the only thing you cannot do is reassign it;

// const veggies = ["tomato", "cucumber", "potato"];
// console.log(veggies);
// veggies.push("beetroot");
// console.log(veggies);
// veggies.unshift("avocado");
// console.log(veggies);

// console.log("veggies is an array: " + Array.isArray(veggies));
// console.log("'hello' is an array: " + Array.isArray("hello"));

// console.log(veggies.indexOf("potato"));     // return the index of found element (prbly binSearch);
// console.log(veggies.indexOf("mango"));

//---------------------------------------------------------------
// Object Literals
// Object literals are (key,value) pairs

// const person = {
//     firstName: "Kirils",
//     lastName: "Smith",
//     age: 99,
//     favBooks: ["Atlas Shrugged", "1984", "Fountainhead"],
//     address: {
//         street: "90 Baker st",
//         city: "London",
//         country: "UK"
//     }
// }
// console.log(person);
// console.log(person.favBooks[1]);

// const { firstName, lastName, address: { city } } = person;     // destructuring/pulling the variables from Object Literal
// console.log(firstName);
// console.log(lastName);
// console.log(city);

// person.email = "smith@gmail.com";       // directly add attributes
// console.log(person.email);

// const objArray = [                      // array of objects
//     {
//         id: 1,
//         name: "Kirils",
//         isRegistered: true
//     },
//     {
//         id: 2,
//         name: "John",
//         isRegistered: false
//     },
//     {
//         id: 3,
//         name: "Travis",
//         isRegistered: true
//     }
// ];
// console.log(objArray);
// console.log(objArray[1].name);
// const scndName = objArray[1].name;
// console.log(scndName);

//---------------------------------------------------------------
// JSON format
// It's a data format used for APIs, sending and receiving data to/from servers
// check out JSON formatter online (syntax is similar to object literals)

// const objArray = [                      // array of objects
//     {
//         id: 1,
//         name: "Kirils",
//         isRegistered: true
//     },
//     {
//         id: 2,
//         name: "John",
//         isRegistered: false
//     },
//     {
//         id: 3,
//         name: "Travis",
//         isRegistered: true
//     }
// ];

// const objArrayJSON = JSON.stringify(objArray);
// console.log(objArrayJSON);


//---------------------------------------------------------------
// for and while Loops

// for (let i = 0; i < 10; i++) {
//     console.log(`for loop number: ${i}`);
// }

// let i = 0;
// while (i < 10) {
//     console.log(`while loop number: ${i}`);
//     i++;
// }

// for (let i = 0; i < objArray.length; i++) {
//     console.log(objArray[i].name);
// }

// for (let obj of objArray) {         // for of loop (better way to loop through array)
//     console.log(obj.isRegistered);
// }

// // forEach method to loop through an array
// objArray.forEach(function(obj) {
//     console.log(obj.id);
// });

// // map method to create an array from an array by looping through
// const nameArray = objArray.map(function(obj) {
//     return obj.name;
// });
// console.log(nameArray);

// // filter to create a new array from an array based on condition
// const registeredArray = objArray.filter(function(obj) {
//     return obj.isRegistered == true;
// });
// console.log(registeredArray);

// // combine methods
// const registeredNames = objArray.filter(function(obj) {
//     return obj.isRegistered == true;
// }).map(function(obj) {
//     return obj.name;
// });
// console.log(registeredNames);


//---------------------------------------------------------------
// Conditionals

// const xNum = 10;
// const xStr = "10";
// const yNum = 5;

// if (xNum == 10) {                   // non-type-matching equality operator
//     console.log("xNum is 10");
// }

// if (xStr == 10) {
//     console.log("xStr is 10");
// }

// if (xNum === 10) {                  // type-matching equality operator
//     console.log("xNum is type-matched 10");
// }

// if (xStr === 10) {
//     console.log("xStr is type-matched 10");
// } else {
//     console.log("xStr is not type-matched 10");
// }

// if (xNum > 5 || yNum > 10) {
//     console.log("OR success");
// } else {
//     console.log("OR failure")
// }

// if (xNum > 5 && yNum > 10) {
//     console.log("AND success");
// } else {
//     console.log("AND failure");
// }

// const color = xNum > 10 ? "black" : "white";    // ternary operator conditional
// console.log(color);

// switch(color) {  // switch conditional
//     case "black":
//         console.log("color is black");
//         break;
//     case "white":
//         console.log("color is white");
//         break;
//     default:
//         console.log("color is unknown");
//         break;
// }


//---------------------------------------------------------------
// Functions
// note that it is bad practice to console.log inside of functions for the result

// function addNums(num1 = 0, num2 = 0) {  // with default values provided
//     console.log(num1 + num2);
// }

// addNums(64, 32);
// addNums();

// const arrowFunc = (num1 = 0, num2 = 0) => {  // arrow function
//     console.log(num1, num2);
// }
// arrowFunc(1, 1);

// const slimFunc = (num1, num2) => num1 + num2;   // slim arrow func
// console.log(slimFunc(2, 3));


//---------------------------------------------------------------
// OOP

// Constructor function
// function Person(firstName, lastName, dob) {     // construction function
//     this.firstName = firstName;                 // member objects
//     this.lastName = lastName;
//     this.dob = new Date(dob);                   // turning string into Date object
//     this.getAge = function() {                  // method
//         return 2021 - this.dob.getFullYear();
//     }
//     this.getFullName = function() {
//         return firstName + " " + lastName;
//     }
// }

// const person1 = new Person("Kirils", "Smith", "04-20-1991");  // instantiating an object
// console.log(person1);
// console.log(person1.dob);
// console.log(person1.dob.getFullYear());
// console.log(person1.getAge());
// console.log(person1.getFullName());

// Prototyping the member functions
// This is done to avoid having functions defined for every instantiated object

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getBirthMonth = function() {
//     return this.dob.getMonth();
// }

// console.log(person1.getBirthYear());
// console.log(person1.getBirthMonth());

// Class
// Syntactic sugar for defining a class instead of construction function and prototypes
// Member functions automatically become prototypes instead of actual definitions
// class Player {
//     constructor(nickname, level, score) {
//         this.nickname = nickname;
//         this.level = level;
//         this.score = score;
//     }

//     getFinalScore() {
//         return this.level * this.score;
//     }
// }

// const player1 = new Player("Hellboy", 80, 40);
// console.log(player1);
// console.log(player1.getFinalScore());


//---------------------------------------------------------------
// DOM (Document Object Model)

// window object of the browser (parent of the browser)
// console.log(window);    

// Single element selectors
// const form = document.getElementById("my-form");
// const container = document.querySelector(".container");     // select by anything
// const tag = document.querySelector("h1");
// console.log(form);
// console.log(container);
// console.log(tag);

// Multiple element selectors
// const elements = document.querySelectorAll(".item");        // returns NodeList (similar to array)
// const classes = document.getElementsByClassName("item");   // older, not preferred way (also limited to classes)
// const tags = document.getElementsByTagName("li");           // returns HTMLCollection (you have to manually transform it into array)
// console.log(elements);
// console.log(classes); 
// console.log(tags);

// Loop through the items of querySelectorAll
// elements.forEach((item) => console.log(item));              // using arrow function shorthand

// Changing the contents of a list dynamically
// const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Adjusted Item 1";
// ul.children[1].innerText = "Adjusted Item 2";
// ul.lastElementChild.innerHTML = "<h3>Adjusted Item 3</h3>";

// Changing the styling dynamically
// const btn = document.querySelector(".btn");
// btn.style.background = "purple";

// Adding events
// btn.addEventListener('click', (e) => {
//     e.preventDefault();     // prevent actual submitting
//     console.log('click');
//     console.log(`Class name of the button: ${e.target.className}`);
//     document.querySelector("#my-form").style.background = "lightgrey";
//     document.querySelector("header").classList.add("bg-dark");

// });

//---------------------------------------------------------------
// Functional form

const form = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if (nameInput.value === '' || emailInput.value === '') {
        msg.innerHTML = "Please enter all fields";
        // msg.style.color = "red";
        msg.classList.add("error");

        setTimeout(() => msg.remove(), 3000);
    } else {
        console.log("successful form entry");
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);

        // clear fields
        nameInput.value = "";
        emailInput.value = "";
    }

}