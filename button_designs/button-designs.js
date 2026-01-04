// Plans: 
//          1. To implement a linear gradient dynamically using the randomizer. 
//          2. Switch border styles (none, solid, dashed). Try to work with box-shadow to make a floating button. 
//          3. Utilize the changeStyles() function to change the designs for both normalBtn and dynamicBtn.

const container = document.getElementById("container");
const normalBtn = document.getElementById("change-btn");
const button = document.querySelector("button");

// Normal Button Interactions
// Button changes the style of its own design

normalBtn.addEventListener("click", changeStyle);

// Dynamic Button Creation and Interactions
// Button will be created and styled every click

const dynamicBtn = document.createElement("button");
dynamicBtn.textContent = "My button and its design has been created dynamically";
dynamicBtn.style.backgroundColor = "rgb(126,100, 90)"; //rgba would be more appropriate for better variety and look.

container.appendChild(dynamicBtn);

dynamicBtn.addEventListener("click", changeStyle);

function changeStyle(){
    // Changes the style with a randomizer
    let rngRed = Math.floor(Math.random()* 256);
    let rngBlue = Math.floor(Math.random()* 256);
    let rngGreen = Math.floor(Math.random()* 256);
    let rngAlpha = Math.random()* 1.0 + 0.5;

    const btnStyle = button.style;
    btnStyle.backgroundColor = `rgba(${rngRed},${rngBlue},${rngGreen}, ${rngAlpha})`;
    btnStyle.boxShadow = "10px 5px 10px black";
}