const highestValue = 100
const lowerValue = 1

const elementoMenorValor = document.querySelector("#lower-value")
elementoMenorValor.innerHTML = lowerValue

const elementoMaiorValor = document.querySelector("#highest-value")
elementoMaiorValor.innerHTML = highestValue

function sortearNumero() {
  return parseInt(Math.random() * highestValue + 1)
}

const numeroSorteado = sortearNumero()
console.log(numeroSorteado)
