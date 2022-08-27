 
//If you're seing this and find something that is weird or could be done better with another way.
//You are propably right as this is one of my first projects.
//PROJETO INCOMPLETO.
const selectColorButton = document.querySelector("#pickColorButton").value;
const clear = document.querySelector("#clearButton").addEventListener('click', clean);
let rows = document.querySelector("#setGrid").value;
let whatSize = document.querySelector("#whatSize").innerHTML = rows;
const mainContent = document.getElementById("mainContainer");
const mainContent2 =  document.getElementById("mainContainer");
let createDivContainer = undefined;
let i = undefined;
let randomColor = undefined;
//make the grid.


let makeGrid = function(size) {
    for(i = 0; i < (size * size); i++){
      let createDiv = document.createElement("div");
        mainContent.appendChild(createDiv)
        mainContent.style.width = "960px";
        mainContent.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        mainContent.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        createDiv.classList.add('box');
        createDivContainer = createDiv;
        createDiv.addEventListener("mousemove", () => {  
          createDiv.style.backgroundColor = selectColorButton;
            
            
        })

};
}
    makeGrid(rows);
    





    function clean() {
        mainContent.innerHTML = "";
        makeGrid(rows);
    }








