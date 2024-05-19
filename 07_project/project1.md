#DOM project code  

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-kscuog?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,index.html)

# solution code 

#project 1

```javascript
console.log("hello js")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    //e is event -function object
    if (e.target.id == 'grey') {
      //e.target is the particlar id ..
      //instead of e.target.id you can write color name
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```

#project 2
```javascript
const form = document.querySelector('form'); 
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height < 0 || height === '' || isNaN(height)) {
    result.innerHTML = `please give valid height ${height}`;
  } else if (weight < 0 || weight === '' || isNaN(weight)) {
    result.innerHTML = `please give valid weight ${weight}`;
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML =  `<span>${bmi}</span>`
  }
});
```
#project 3

```javascript
const clock = document.getElementById('clock');
//can aslo use queryselector both give same result
//const clock = document.querySelector('#clock')

setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); //run after every 1 second


```

#project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);
let submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
let gussesSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startover = document.querySelector('.resultParas');

let prevGusses = [];
let numGusses = 1;

let playGame = true;

const p = document.createElement('p');

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  //to validate the guess
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter number more than 1');
  } else if (guess > 100) {
    alert('please enter number less than 100');
  } else {
    prevGusses.push(guess);
    if (numGusses === 11) {
      displayGuess(guess);
      displayMeassage(`Game over Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  //to check guess
  if (guess === randomNumber) {
    displayMeassage(`you gussed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMeassage(`number is too low`);
  } else if (guess > randomNumber) {
    displayMeassage(`number is too high`);
  }
}
function displayGuess(guess) {
  //clean up guess
  userInput.value = '';
  gussesSlot.innerHTML += `${guess}, `;
  numGusses++;
  remaining.innerHTML = `${11 - numGusses}`;
}
function displayMeassage(message) {
  //to display message
  lowOrHi.innerHTML = ` <h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startover.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGusses = [];
    numGusses = 1;
    gussesSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGusses} `;
    userInput.removeAttribute('disabled');
    startover.removeChild(p);
    playGame = true;
  });
}


```