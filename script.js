// Globals
let nbrGuesses = 6;
let guessesRemaining = nbrGuesses;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = '';

// Functions
function initBoard() {
	let board = document.querySelector('#game-board');

	fetch('https://wordle-backend.vercel.app/game/new')
		.then(response => response.json())
		.then(data => {
			if (!data.result) return;

			gameId = data.gameId;
			document.querySelector('#gameId').textContent = data.gameId;
			rightGuessString = data.word.toLowerCase();

			for (let i = 0; i < nbrGuesses; i++) {
				board.innerHTML += `<div class="letter-row"></div>`;
				for (let j = 0; j < rightGuessString.length; j++) {
					document.querySelectorAll('.letter-row')[i].innerHTML += `<div class="letter-box"></div >`;
				}
			}
		});
}

function insertLetter(pressedKey) {
	if (nextLetter === rightGuessString.length) {
		return;
	}

	let row = document.querySelectorAll('.letter-row')[6 - guessesRemaining];
	let box = row.children[nextLetter];
	box.textContent = pressedKey;
	box.classList.add('filled-box');
	currentGuess.push(pressedKey);
	nextLetter += 1;
}

function deleteLetter() {
	let row = document.querySelectorAll('.letter-row')[6 - guessesRemaining];
	let box = row.children[nextLetter - 1];
	box.textContent = '';
	box.classList.remove('filled-box');
	currentGuess.pop();
	nextLetter -= 1;
}

function checkGuess() {
	let row = document.querySelectorAll('.letter-row')[6 - guessesRemaining];
	let guessString = '';
	let rightGuess = Array.from(rightGuessString);

	for (const val of currentGuess) {
		guessString += val;
	}

	if (guessString.length != rightGuessString.length) {
		document.querySelector('#result').innerHTML = `<p>Not enough letters !</p>`;
		return;
	}

	for (let i = 0; i < rightGuessString.length; i++) {
		let letterColor = '';
		let box = row.children[i];

		let letterPosition = rightGuess.indexOf(currentGuess[i]);

		// Is letter in the correct guess
		if (letterPosition === -1) {
			letterColor = '#787C7E';
		} else {
			if (currentGuess[i] === rightGuess[i]) {
				letterColor = '#6AAA64';
			} else {
				letterColor = '#C9B458';
			}

			rightGuess[letterPosition] = '#';
		}

		setTimeout(() => {
			box.style.backgroundColor = letterColor;
			box.style.color = 'white';
		}, 250 * i);
	}

	if (guessString === rightGuessString) {
		document.querySelector('#result').innerHTML = `<p class="won">YOU WON!</p>`;
		guessesRemaining = 0;
		guessString = '';
		return
	} else {
		guessesRemaining -= 1;
		currentGuess = [];
		nextLetter = 0;
		guessString = '';

		if (guessesRemaining === 0) {
			document.querySelector('#result').innerHTML = `
			  <div id="divResult">
			    <p class="loose">GAME OVER</p>
			    <p>The answer is "${rightGuessString.toUpperCase()}"</p>
			  </div>
			`;
		}
	}
}

// Events listeners
document.querySelector('#newGame').addEventListener('click', function () {
	document.querySelector('#result').innerHTML = '';
	document.querySelector('#game-board').innerHTML = '';
	nbrGuesses = 6;
	guessesRemaining = nbrGuesses;
	nextLetter = 0;
	currentGuess = [];
	rightGuessString = '';
	initBoard();
	document.activeElement.blur();
});

document.addEventListener('keyup', function (e) {
	if (guessesRemaining === 0) {
		return;
	}

	const pressedKey = String(e.key);
	const found = pressedKey.match(/[a-z]/gi);

	if (pressedKey === 'Backspace' && nextLetter !== 0) {
		deleteLetter();
		return;
	} else if (pressedKey === 'Enter') {
		checkGuess();
		return;
	} else if (!found || found.length > 1) {
		return;
	} else {
		insertLetter(pressedKey.toLocaleLowerCase());
	}
});
