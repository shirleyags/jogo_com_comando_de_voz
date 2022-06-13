function verificaSeOChutePossuiUmValorValido(guess) {
  const numero = +guess

  if (chuteForInvalido(numero)) {
    if (guess.toUpperCase() === "FINALIZAR") {

      document.body.innerHTML = `
                <h2>Fim de Jogo!!!</h2>
                <h3>Pressione o botão se quiser jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar-novamente">Jogar novamente</button>
            ` 
      document.body.style.backgroundColor = "#1C1C1C"
    } else {
      elementoChute.innerHTML += "<div>Valor inválido</div>"
    }
  } else if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido. O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
  } else if (numero == numeroSorteado) {
    document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSorteado}</h3>
            <button id="jogar-novamente" class="btn-jogar-novamente">Jogar novamente</button>
        `
  } else if (numero > numeroSorteado) {
    elementoChute.innerHTML +=
      '<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>'
  } else {
    elementoChute.innerHTML +=
      '<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>'
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload()
  }
})
