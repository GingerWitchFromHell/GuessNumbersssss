// DOM-Elemente holen
const startButton = document.getElementById("startButton");
const guessButton = document.getElementById("guessButton");
const guessInput  = document.getElementById("guessInput");
const messageEl   = document.getElementById("message");
const passOutput  = document.getElementById("passOutput");

let randomNumber;
let tries = 0;

// Neues Spiel starten
function startGame() {
  // Zufallszahl 0-100
  randomNumber = Math.floor(Math.random() * 101);
  tries = 0;

  // Eingabe & Meldungen zurücksetzen
  guessInput.value = "";
  messageEl.textContent = "";
  passOutput.textContent = "";
  passOutput.style.display = "none";
}

// Rateversuch prüfen
function checkGuess() {
  const guess = parseInt(guessInput.value, 10);

  // Ungültige Eingabe?
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
  }
}

// Event Listener
startButton.addEventListener("click", startGame);
guessButton.addEventListener("click", checkGuess);

// NEU: Enter-Taste im Eingabefeld abfangen
guessInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkGuess();
  }
});
