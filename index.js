//Defining important variables
let modeInUse = "color";
let color = document.getElementById("firstOptionButton");
let colorHolder;
const clearColor = "#fff"
const colorButton = document.querySelector("#colorButton").addEventListener("click", () => changeMode("color"));
const rainbowButton = document.querySelector("#rainbowButton").addEventListener("click", () => changeMode("rainbow"));
const eraserButton = document.querySelector("#eraserButton").addEventListener("click", () => changeMode("eraser"));
const clear = document.querySelector("#clearButton").addEventListener("click", clearPage);
const mainContent = document.getElementById("mainContainer");
let gridDefiner = prompt('Choose the size of your grid');
let gridSize;

function colorGetter(){
  color.oninput = (e) => setColor(e.target.value) //changes event value every time it receives a new input.
}
colorGetter(); //start colorGetter funciton
setColor('#000');
function setColor(colorGot){
  if(colorGot == ""){
    colorHolder = "#000";
  }else{
    colorHolder = colorGot; //set colorGot to colorHolder
  }
}

function gridTroubleShooting(){
  if(gridDefiner === null || gridDefiner === ""){
    gridDefiner = "16";
    gridSize = parseInt(gridDefiner);
    limitGridSize(); //start function
  }else{
    gridSize = parseInt(gridDefiner);
    limitGridSize(); //start function in case the value isn't null.

  }
}

gridTroubleShooting() //start gridTroubleShotting

//limitGridSize was made in order to avoid the excess of divs which causes the system to slow down a lot.
function limitGridSize(){
  if(gridSize > 32){
    gridSize = 32;
    return makeGrid(gridSize);
  }else{
    return makeGrid(gridSize);
  }
}

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

function colorGrid(whatMode){
  let a = mainContent.querySelectorAll("div");
  if(whatMode == "color") {
    a.forEach(item => {
        item.addEventListener("mouseover", () =>{
          item.style.backgroundColor = colorHolder;
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


