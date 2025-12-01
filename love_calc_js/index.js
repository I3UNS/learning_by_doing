let counter = 0;


window.onload = function(){
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}

function calculateLove(){
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush-name").value;

    if(yourName != "" && crushName != ""){
        let percentage = Math.floor(Math.random() * 101); // 0-0.99 * 101 -> 100.999
        document.getElementById("result-message").innerText = yourName + " and " + crushName + "'s chance of love: ";
        document.getElementById("result-percentage").innerText = percentage.toString() + "%";
        
        if(counter <= 5){
            counter++;
        } else if(counter > 5 && counter != 10){
                document.getElementById("result-message").innerText = "Bro chill. This ain't it. Go and talk with them about stupid things or things they like";
                document.getElementById("result-percentage").innerText = "";
                counter++;
        } else if(counter == 10){
            counter = 0;
        }
    }
}