//If you're seing this and find something that is weird or could be done better with another way.
//You are propably right as this is one of my first projects.
//PROJETO INCOMPLETO.
const selectColorButton = document.querySelector("#pickColorButton").value;
const rainbow = document.querySelector("#rainbowButton").addEventListener("click", rainbowOption);
const eraser = document.querySelector("#eraserButton");
const clear = document.querySelector("#clearButton").addEventListener('click', clean);
const rows = document.querySelector("#setGrid").value;
const mainContent = document.getElementById("mainContainer");
const mainContent2 =  document.getElementById("mainContainer");
let createDiv

//make the grid.


let makeGrid = function(size) {
    for(let i = 0; i < (size * size); i++){
      let createDiv2 = document.createElement("div");
        mainContent.appendChild(createDiv2)
        mainContent.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        mainContent.style.gridTemplateRows = `repeat(${size}, 1fr)`;      
        createDiv2.classList.add('box');
        createDiv = createDiv2;
        createDiv2.addEventListener("mouseover", () => {
            createDiv2.style.backgroundColor = selectColorButton;
           
        })
    }


};
    console.log(createDiv)
    makeGrid(rows); 
    function rainbowOption()    {
        alert("jorge!!!");
    }
    
    



   
    function clean() {
        let a;
        a = mainContent.style.backgroundColor = "white";
    }
    
    
    
    
    
    


