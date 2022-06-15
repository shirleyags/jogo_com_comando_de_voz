const guessElement = document.querySelector("#guess")

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = "pt-BR"
recognition.start()

recognition.addEventListener("result", onSpeak)

function onSpeak(e) {
  guess = e.results[0][0].transcript
  showGuess(guess)
  checkGuessHasAvalidValue(guess)
}

function showGuess(guess) {
  guessElement.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${guess}</span>
     `
}

recognition.addEventListener("end", () => recognition.start())
