const startButton = document.getElementById("startButton");
const guessButton = document.getElementById("guessButton");
const guessInput  = document.getElementById("guessInput");
const messageEl   = document.getElementById("message");
const passOutput  = document.getElementById("passOutput");

let randomNumber;
let tries = 0;

// Eingabe- und Rat-Button initial deaktivieren
guessInput.disabled = true;
guessButton.disabled = true;

function startGame() {
  randomNumber = Math.floor(Math.random() * 101);
  tries = 0;
  console.log("Neue Zufallszahl:", randomNumber);

  guessInput.value = "";
  messageEl.textContent = "";
  passOutput.textContent = "";
  passOutput.style.display = "none";

  // Eingabe- und Rat-Button freigeben
  guessInput.disabled = false;
  guessButton.disabled = false;
}

function checkGuess() {
  // Falls das Spiel noch nicht gestartet wurde
  if (typeof randomNumber !== 'number') {
    messageEl.textContent = "Bitte starte zuerst das Spiel!";
    return;
  }

  const guess = parseInt(guessInput.value, 10);
  console.log("Eingegebener Tipp:", guess);
  console.log("Zufallszahl:", randomNumber);

  if (isNaN(guess)) {
    messageEl.textContent = "Bitte gib eine gültige Zahl ein!";
    return;
  }

  tries++;

  if (guess < randomNumber) {
    messageEl.textContent = `${guess} ist zu niedrig. Versuch's nochmal!`;
  } else if (guess > randomNumber) {
    messageEl.textContent = `${guess} ist zu hoch. Versuch's nochmal!`;
  } else {
    // Treffer
    messageEl.textContent = `Richtig! Du hast ${tries} Versuche gebraucht.`;
    passOutput.style.display = "block";
    passOutput.textContent = "Glückwunsch, du hast es geschafft!";
    // Optional: Eingabe- und Rat-Button nach dem Gewinnen wieder deaktivieren
    guessInput.disabled = true;
    guessButton.disabled = true;
  }
}

startButton.addEventListener("click", startGame);
guessButton.addEventListener("click", checkGuess);

guessInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkGuess();
  }
});
