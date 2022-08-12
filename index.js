const selectColorButton = document.querySelector("#pickColorButton").value;
const rainbow = document.querySelector("rainbowButton");
const eraser = document.querySelector("eraserButton");
const clear = document.querySelector("clearButton");
const rows = document.querySelector("#setGrid").value;
const columns = rows;
const mainContainer = document.querySelector("#mainContainer");
//make the grid.


let makeGrid = function(row, column) {
    mainContainer.style.setProperty("--grid-rows",row);
    mainContainer.style.setProperty("--grid-cols", column);
    for(let i = 0; i <= (row * column); i++)    {
        let createDiv = document.createElement("div");
        mainContainer.appendChild(createDiv);
        console.log(i);

    }
};
    makeGrid(rows, columns); 


