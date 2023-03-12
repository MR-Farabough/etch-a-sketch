let mainContainer = document.getElementById('main-container')
let body = document.querySelector("body")
const gridSelectionBTN = document.getElementById('grid-selection')
let gridSquares = 0;

function createDiv(i) {
    newDiv = document.createElement('div')
    newDiv.setAttribute('id',`newDiv${i}`)
    mainContainer.append(newDiv)
}

gridSelectionBTN.addEventListener('click', function getSquares() {
    gridSquares = 0
    gridSquares = parseInt(prompt("How many squares?","0"),10)
    if (gridSquares > 0 && gridSquares < 101) {
        for (let i = 0; i<gridSquares;i++) {
            console.log('X')
            createDiv(i)
        }
    } else {
        console.log("FALSE")
    }
})