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
  gridSquares = parseInt(prompt("How many squares?", "0"), 10)
  if ( gridSquares > 1 && gridSquares < 101) {
    const width = gridSquares * 10
    const height = gridSquares * 10
    gridSquares = gridSquares * gridSquares
    mainContainer.style.height = `${height}px`
    mainContainer.style.width = `${width}px`
    console.log(mainContainer.style.width)
    const gridMultiplied = gridSquares
    generateSquares(gridMultiplied)
  
    const divs = document.querySelectorAll('.square')
    for (let index = 0; index < divs.length; index++) {
      const divEL = divs[index]
      divEL.addEventListener('mouseover', function log() {
        divEL.style.backgroundColor = 'blue'
      })
    }
  } else {
    alert("MUST BE BETWEEN 1 - 100")
  }

})

