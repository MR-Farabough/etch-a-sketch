let mainContainer = document.getElementById('main-container')
let body = document.querySelector("body")
const gridSelectionBTN = document.getElementById('grid-selection')
let gridSquares = 0;

function createDiv() {
  newDiv = document.createElement('div')
  newDiv.setAttribute('class', 'square')
}

function generateSquares(gridMultiplied) {
    for (let i = 0; i < gridMultiplied; i++) {
      createDiv()
      mainContainer.append(newDiv)
    }
    
  }
gridSelectionBTN.addEventListener('click', function getSquares() {
  mainContainer.innerText = ""
  // gridSquares = parseInt(prompt("How many squares?", "0"), 10)
  gridSquares = 18 * 18
  // TODO HANDLE SITUATION WHERE INPUT IS TO LARGE OR NOT A NUMBER
  // TODO This is a test for my github connection
  const gridMultiplied = gridSquares
  generateSquares(gridMultiplied)

  const divs = document.querySelectorAll('.square')
  for (let index = 0; index < divs.length; index++) {
    const divEL = divs[index]
    divEL.addEventListener('mouseover', function log() {
      divEL.style.backgroundColor = "black"
    })
  }
})

