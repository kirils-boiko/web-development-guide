
// Adding jquery script tag to the head dynamically

let head = document.querySelector("head");
let script = document.createElement('script');
script.type = "text/javascript";
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
script.integrity = "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=";
script.crossOrigin = "anonymous";

// there are several events for cross browsere compatibility
script.onreadystatechange = handler;
script.onload = handler;

head.appendChild(script);

function handler() {
    console.log("jquery added: ");
}

//----------------------------------------------------------
// Rock, paper, scissors

function rpsGame(yourChoice) {
    const choices = ["rock", "paper", "scissors"];
    const humanChoice = yourChoice.id;
    const botChoice = choices[Math.floor(Math.random() * 3)];
    console.log(`Your choice: ${humanChoice}`);
    console.log(`Computer choice: ${botChoice}`);
    result = pickWinner(humanChoice, botChoice);  // returns two-element array
    console.log(result);
    msg = getMessage(result);  // returns { "message": "message", "color": "color"}
    console.log(msg);
    rpsOutput(humanChoice, botChoice, msg);    
    // playAgain();
}

function pickWinner(humanChoice, botChoice) {
    const rpsDatabase = {
        "rock": {"scissors": 1, "rock": 0.5, "paper": 0},
        "paper": {"scissors": 0, "rock": 1, "paper": 0.5},
        "scissors": {"scissors": 0.5, "rock": 0, "paper": 1}
    };

    const yourScore = rpsDatabase[humanChoice][botChoice];
    const botScore = rpsDatabase[botChoice][humanChoice];

    return [yourScore, botScore]; 
}

function getMessage(result) {
    if (result[0] === 1) {
        return {message: "You won!", yourColor: "green", botColor: "red"};
    } else if (result[0] === 0.5) {
        return {message: "Draw!", yourColor: "yellow", botColor: "yellow"};
    } else {
        return {message: "You lost!", yourColor: "red", botColor: "green"};
    }
}

function playAgain() {
    $("#inner-container").load(" #inner-container > *");
    console.log("playAgain executed");
}

function rpsOutput(humanChoice, botChoice, msg) {
    
    const humanImg = document.querySelector(`#${humanChoice}`);
    humanImg.removeAttribute("onclick");
    humanImg.classList.remove("my-hover");
    humanImg.style.filter = `drop-shadow(10px 10px 5px ${msg.yourColor})`;
    const botImg = document.querySelector(`#${botChoice}`);
    botImg.removeAttribute("onclick");
    botImg.classList.remove("my-hover");
    botImg.style.filter = `drop-shadow(10px 10px 5px ${msg.botColor})`;
    const msgNode = document.createElement("h3");
    msgNode.textContent = msg.message;
    
    const imgContainer = document.querySelector("#img-container");
    while(imgContainer.firstChild) {
        imgContainer.removeChild(imgContainer.lastChild);
    }
    imgContainer.appendChild(humanImg);
    imgContainer.appendChild(msgNode);
    imgContainer.appendChild(botImg.cloneNode(true));

    // playAgain button
    const innerContainer = document.querySelector("#inner-container");
    const button = document.createElement("button");
    button.className = ("btn");
    button.style.background = "#984B43";
    button.style.color = "#F7F5F0";
    button.textContent = "Play again";
    button.setAttribute("onclick", "playAgain()");
    button.type = "button";
    innerContainer.appendChild(button);
}


//----------------------------------------------------------
// Change the button colors
let myButtons = document.querySelectorAll(".buttons");
console.log(myButtons);

// clone an array
const myButtonsCopy = [];
myButtons.forEach((x) => myButtonsCopy.push(x.classList[2]));
console.log(myButtonsCopy);

function buttonColorChange(option) {
    if (option.value === "rustyred") {
        buttonsRed();
    } else if (option.value === "gunmetal") {
        buttonsGunMetal();
    } else if (option.value === "white") {
        buttonsWhite();
    } else if (option.value === "random") {
        buttonsRandom();
    } else if (option.value === "reset") {
        buttonsReset();
    }
}

function buttonsRed() {
    myButtons.forEach(function(obj) {
        obj.className = obj.className.replace(/my-button-[0-9]/, "my-button-2");
    });
}

function buttonsGunMetal() {
    myButtons.forEach(function(obj) {
        obj.className = obj.className.replace(/my-button-[0-9]/, "my-button-1");
    });
}

function buttonsWhite() {
    myButtons.forEach(function(obj) {
        obj.className = obj.className.replace(/my-button-[0-9]/, "my-button-3");
    });
}

function buttonsRandom() {
    for (let i = 0; i < myButtons.length; i++) {
        const randomColor = myButtonsCopy[Math.floor(Math.random()* 3)];
        myButtons[i].className = myButtons[i].className.replace(/my-button-[0-9]/, randomColor);
    }
}

function buttonsReset() {
    for (let i = 0; i < myButtons.length; i++) {
        myButtons[i].className = myButtons[i].className.replace(/my-button-[0-9]/, myButtonsCopy[i]);
    }
}


//----------------------------------------------------------
// Blackjack game

let bjGame = { 
    "you": {"scoreSpan": "#your-bj-result", "div": "#your-box", "score": 0},
    "dealer": {"scoreSpan": "#dealer-bj-result", "div": "#dealer-box", "score": 0},
    "cards": ["2", "3", "4", '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    "cardsMap": {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10,
        'Q': 10, 'K': 10, 'A': [1, 11]},
    "wins": 0,
    "losses": 0,
    "draws": 0,
    "dealerTurn": false,
    "gameOver": false
}

const you = bjGame["you"];
const dealer = bjGame["dealer"];
const cards = bjGame["cards"];
const cardsMap = bjGame["cardsMap"]

const hitSound = new Audio("static/sounds/swish.m4a");
const winSound = new Audio("static/sounds/cash.mp3");
const lossSound = new Audio("static/sounds/aww.mp3");

document.querySelector("#bj-hit").addEventListener("click", bjHit);
document.querySelector("#bj-stand").addEventListener("click", bjStand);
document.querySelector("#bj-deal").addEventListener("click", bjDeal);

// button functions

function bjHit() {
    if (bjGame["dealerTurn"] === false) {
        let card = randomCard();
        showCard(card, you);
        updateScore(card, you);
        showScore(you);

        if (you['score'] >= 21) {
            bjStand();
        }
    }
}

function bjStand() {
    if (bjGame["dealerTurn"] === false) {
        dealerLogic().then(endGame);
    }
}

function bjDeal() {
    if (bjGame["gameOver"] === true) {
        clearPlayer(you);
        clearPlayer(dealer);
        clearRest();
    }
}

// player functions

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement("img");
        cardImage.src = `static/images/${card}.png`;
        cardImage.setAttribute("width", "85px");
        cardImage.setAttribute("height", "131px");
        cardImage.classList.add("m-1");
        document.querySelector(activePlayer["div"]).appendChild(cardImage);
        hitSound.play();
    }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return cards[randomIndex];
}

function updateScore(card, activePlayer) {
    // For ace, if adding 11 keeps below or at 21, add 11; otherwise, add 1;
    if (card === 'A') {
        if (activePlayer['score'] + cardsMap[card][1] <= 21) {
            activePlayer['score'] += cardsMap[card][1];        
        } else {
            activePlayer['score'] += cardsMap[card][0];
        }
    } else {
        activePlayer['score'] += cardsMap[card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST';
        document.querySelector(activePlayer['scoreSpan']).style.color = '#984B43';
    } else {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

// dealer-only functions

// to delay the instantenuous play of cards
function sleep(ms) {
    return new Promise(resolve =>setTimeout(resolve, ms));
}

async function dealerLogic() {
    bjGame["dealerTurn"] = true;
    while (dealer['score'] < 16) {
        let card = randomCard();
        showCard(card, dealer);
        updateScore(card, dealer);
        showScore(dealer);
        await sleep(1000);
    }
}

// game ending functions

async function endGame() {
    bjGame["gameOver"] = true;
    let winner = computeWinner();
    showResult(winner);
    updateResults(winner);
}

function computeWinner() {
    // compute winner and return the winner, update the results
    let winner = null;

    if (you['score'] <= 21) {   // if you don't bust
        if (you['score'] > dealer['score'] || dealer['score'] > 21) {
            winner = you;
        } else if (you['score'] < dealer['score']) {
            winner = dealer;
        } 
    } else if (you['score'] > 21 && dealer['score'] <= 21) {    // if you bust but dealer doesnt
        winner = dealer;
    }

    return winner;
}

function showResult(winner) {
    let message, messageColor;
    if (winner === you) {
        message = "You won!";
        messageColor = "#EAC67A";
        winSound.play();
    } else if (winner === dealer) { 
        message = "You lost!";
        messageColor = "#984B43";
        lossSound.play();
    } else {
        message = "Draw!";
        messageColor = "#F7F5F0";
    }
    document.querySelector("#bj-result").textContent = message;
    document.querySelector("#bj-result").style.color = messageColor;
}

function updateResults(winner) {
    if (winner === you) {
        bjGame["wins"]++;
        document.querySelector("#wins").textContent = bjGame["wins"];
    } else if (winner === dealer) {
        bjGame["losses"]++;
        document.querySelector("#losses").textContent = bjGame["losses"];
    } else {
        bjGame["draws"]++;
        document.querySelector("#draws").textContent = bjGame["draws"];
    }
}

// Clearing functions

function clearPlayer(player) {
    let playerImages = document.querySelector(player["div"]).querySelectorAll("img");
    for (let i = 0; i < playerImages.length; i++) {
        playerImages[i].remove();
    }
    player['score'] = 0;
    document.querySelector(player['scoreSpan']).textContent = 0;
    document.querySelector(player['scoreSpan']).style.color = '#F7F5F0';
}

function clearRest() {
    document.querySelector("#bj-result").textContent = "Let's play";
    document.querySelector("#bj-result").style.color = "#F7F5F0";
    bjGame["dealerTurn"] = false;
    bjGame["gameOver"] = false;
}