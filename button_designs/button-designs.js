// Plans: 
//          1. To implement a linear gradient dynamically using the randomizer. 
//          2. Switch border styles (none, solid, dashed). Try to work with box-shadow to make a floating button. 
//          3. Utilize the changeStyles() function to change the designs for both normalBtn and dynamicBtn.

const container = document.getElementById("container");
const normalBtn = document.getElementById("change-btn");

// Normal Button Interactions
// Button changes the style of its own design

normalBtn.addEventListener("click", changeStyle());

function changeStyle(){
    // Changes the style with a randomizer
}

// Dynamic Button Creation and Interactions
// Button will be created and styled every click

const dynamicBtn = document.createElement("button");
dynamicBtn.textContent = "My button and its design has been created dynamically";
dynamicBtn.style.backgroundColor = "rgb(126,100, 90)"; //rgba would be more appropriate for better variety and look.

container.appendChild(dynamicBtn);