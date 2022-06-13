const maiorValor = 100
const menorValor = 1

const elementoMenorValor = document.querySelector("#lower-value")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.querySelector("#highest-value")
elementoMaiorValor.innerHTML = maiorValor

function sortearNumero() {
  return parseInt(Math.random() * maiorValor + 1)
}

const numeroSorteado = sortearNumero()
console.log(numeroSorteado)
