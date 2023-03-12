let mainContainer = document.getElementById('main-container')
let body = document.querySelector("body")
const gridSelectionBTN = document.getElementById('grid-selection')
let gridSquares = 0;

function createDiv(i) {
    newDiv = document.createElement('div')
    newDiv.setAttribute('id',`newDiv`)
}

function createRows(numOfRows) {
    for (let i = 0; i<numOfRows -1;i++) {
        subContainer = document.createElement('div')
        subContainer.setAttribute('id', 'sub-container')
        body.append(subContainer)
        for ( let x = 0;x<numOfRows;x++) {
            createDiv(numOfRows)
            subContainer.append(newDiv)
        }
    }
}

function generateSquares() {
    if (gridSquares > 0 && gridSquares < 101) {
        for (let i = 0; i<gridSquares;i++) {
            createDiv(i)
            mainContainer.append(newDiv)
        }
        createRows(gridSquares)
    } else {
        console.log("FALSE")
    }
}

gridSelectionBTN.addEventListener('click', function getSquares() {
    gridSquares = 0
    gridSquares = parseInt(prompt("How many squares?","0"),10)
    generateSquares()
})