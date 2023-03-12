let mainContainer = document.getElementById('main-container')
const gridSelectionBTN = document.getElementById('grid-selection')
let gridSquares = 0;

gridSelectionBTN.addEventListener('click', function getSquares() {
    gridSquares = prompt("How many squares?")
})