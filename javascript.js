const container = document.querySelector("#container");
const newGridButton = document.querySelector("#newGridButton");







// Function to create the grid
function createGrid(squaresPerSide) {
    // Clear existing squares
    container.innerHTML = '';

    // Set the grid template
    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;

    const squareSize = container.clientWidth / squaresPerSide;

    // Create the new squares
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }

    // Attach event listeners to squares
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("click", event => {
            event.target.style.backgroundColor = "black";
        });
    });

    //change square

const changeSquare = document.getElementsByClassName ("square");

for (let i = 0; i < changeSquare.length; i++) {
    changeSquare[i].addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "black";
    });
}
}

// Initial grid
createGrid(16);

// Event listener for the button
newGridButton.addEventListener("click", () => {
    let squaresPerSide;
    do {
        squaresPerSide = prompt("Enter the number of squares per side for the new grid (max 100):");
        squaresPerSide = parseInt(squaresPerSide);
    } while (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100);

    createGrid(squaresPerSide);
});

