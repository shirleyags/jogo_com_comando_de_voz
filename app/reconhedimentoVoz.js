const elementoChute = document.querySelector("#guess")

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = "pt-BR"
recognition.start()

recognition.addEventListener("result", onSpeak)

function onSpeak(e) {
  guess = e.results[0][0].transcript
  exibeChuteNaTela(guess)
  verificaSeOChutePossuiUmValorValido(guess)
}

function exibeChuteNaTela(guess) {
  elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${guess}</span>
     `
}

recognition.addEventListener("end", () => recognition.start())
