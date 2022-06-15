const highestValue = 100
const lowerValue = 1

const elementolowerValue = document.querySelector("#lower-value")
elementolowerValue.innerHTML = lowerValue

const elementohighestValue = document.querySelector("#highest-value")
elementohighestValue.innerHTML = highestValue

function drawNumber() {
  return parseInt(Math.random() * highestValue + 1)
}

const chosenNumber = drawNumber()
console.log(chosenNumber)
