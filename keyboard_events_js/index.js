document.addEventListener("keyup", processKeyEvent);
const code = document.getElementById("code");
const which = document.getElementById("which");
const key = document.getElementById("key");
const keyCode = document.getElementById("keyCode");
const keyPressed = document.getElementById("key-pressed");

function processKeyEvent(e){
    // console.log(e);
    // if(e.key = "Enter"){
    //     document.body.style.backgroundColor = "lightcoral";
    // }
    if(e.code){
        code.innerText = e.code;
    }
    if(e.which){
        which.innerText = e.which;
    }
    if(e.key){
        key.innerText = e.key;

        if (e.key.length > 1){
            keyPressed.style.fontSize = "30px";
        } else{
            keyPressed.style.fontSize = "100px";
        }
        
        keyPressed.innerText = e.key;
    }
    if(e.keyCode){
        keyCode.innerText = e.keyCode;
    }
}

