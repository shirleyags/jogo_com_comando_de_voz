function checkGuessHasAvalidValue(guess) {
  const number = +guess

  if (invalidGuess(number)) {
    if (guess.toUpperCase() === "FINALIZAR") {

      document.body.innerHTML = `
                <h2>Fim de Jogo!!!</h2>
                <h3>Pressione o botão se quiser jogar novamente</h3>
                <button id="playAgain" class="btn-playAgain">Jogar novamente</button>
            ` 
      document.body.style.backgroundColor = "#1C1C1C"
    } else {
      guessElement.innerHTML += "<div>Valor inválido</div>"
    }
  } else if (largerOrSmallerNumberThanAllowed(number)) {
    guessElement.innerHTML += `<div>Valor inválido. O número precisa estar entre ${lowerValue} e ${highestValue}</div>`
  } else if (number == chosenNumber) {
    document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${chosenNumber}</h3>
            <button id="playAgain" class="btn-playAgain">Jogar novamente</button>
        `
  } else if (number > chosenNumber) {
    guessElement.innerHTML +=
      '<div>O número que eu pensei é menor <i class="fa-solid fa-arrow-down-long"></i></div>'
  } else {
    guessElement.innerHTML +=
      '<div>O número que eu pensei é maior <i class="fa-solid fa-arrow-up-long"></i></div>'
  }
}

function invalidGuess(number) {
  return Number.isNaN(number)
}

function largerOrSmallerNumberThanAllowed(number) {
  return number > highestValue || number < lowerValue
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "playAgain") {
    window.location.reload()
  }
})
