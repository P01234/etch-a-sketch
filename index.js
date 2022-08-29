//Defining important variables
let modeInUse = "color";
const color = document.querySelector(".firstOptionButton").value;
const clearColor = "#fff"
const colorButton = document.querySelector("#colorButton").addEventListener("click", () => changeMode("color"));
const rainbowButton = document.querySelector("#rainbowButton").addEventListener("click", () => changeMode("rainbow"));
const eraserButton = document.querySelector("#eraserButton").addEventListener("click", () => changeMode("eraser"));
const clear = document.querySelector("#clearButton").addEventListener("click", clearPage);
const mainContent = document.getElementById("mainContainer");
const gridSize = prompt('Choose the size of your grid');
let rainbowColor = ["#9400D3" , "#4B0082" , "#0000FF" , "#00FF00", 
"#FFFF00", "#FF7F00", "#FF0000" ];




function changeMode(newMode)  {
  if(newMode == 'color'){
     modeInUse = newMode;
    
  }else if(newMode == "rainbow"){
     modeInUse = newMode;
    
  }else{
     modeInUse = newMode;
    
  }
  return colorGrid(modeInUse);
}

function makeGrid(size) {
  for(let i = 0; i < (size * size); i++)  {
  
    let gridCreator = document.createElement('div');
    mainContent.appendChild(gridCreator);
    mainContent.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    mainContent.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    mainContent.classList.add('box');
    gridCreator.style.border = "black solid 1px";
    gridCreator.addEventListener("mouseover", () => colorGrid(modeInUse))
   
    
    
  }
}
makeGrid(gridSize);

function colorGrid(whatMode){
  let a = mainContent.querySelectorAll("div");
  if(whatMode == "color") {
    a.forEach(item => {
        item.addEventListener("mouseover", () =>{
        item.style.backgroundColor = color
      })
    })
  }else if(whatMode == "rainbow"){
    a.forEach(item => {
      item.addEventListener("mouseover", () => {
        const fR = Math.floor(Math.random() * 256)
        const sG = Math.floor(Math.random() * 256)
        const tB = Math.floor(Math.random() * 256)
        item.style.backgroundColor = `rgb(${fR}, ${sG}, ${tB})`;
      })
    })
  }
  else{
    a.forEach(item => {
      item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "#fff";
      })
    })
  }
}

function clearPage()  {
  let clear;
  clear = mainContent.querySelectorAll("div");
  clear.forEach(all => {
    all.style.backgroundColor = clearColor;
  })
}


