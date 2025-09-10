let randomnumber = Math.floor(Math.random() * 100) + 1;
let level = 10;

function buttonstart() {
    window.location.href = "index1.html";
}
function submitstart() {
    const usernumber = Number(document.getElementById("inputnum").value);
    let message = "";

    if (!usernumber || usernumber < 1 || usernumber > 100) {
        message = "Please enter a valid value between 1 and 100.";
    } else if (randomnumber === usernumber) {
        window.location.href = "win.html";
    } else if (randomnumber > usernumber) {
        message = "Too low, try again.";
        level--;
    } else if (randomnumber < usernumber) {  
        message = "Too high, try again.";
        level--;
    }
    if(level==1){
        alert("Level is complete soon !!");
        
    }
    if (level === 0) {
        window.location.href = "loss.html";
    }
    document.getElementById("result").innerHTML = message;
    document.getElementById("leave").innerHTML = `Level: ${level}`;
    document.getElementById("inputnum").value="";
}
function restart(){
    window.location.href="index.html";
}
