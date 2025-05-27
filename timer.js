let timeSecond = document.getElementById("time-second");
let i = 0;
let timeMinute = document.getElementById("time-min");
let x = 0;
let text = document.getElementById("text");

setInterval(() => {
    i++;
    if(i >=60){
        i = 0;
        x +=1;
        timeMinute.innerHTML = String(x).padStart(2,"0")
    }
    timeSecond.innerHTML = String(i).padStart(2,"0");
    text.innerHTML = "You Have Been Using Chrome for " + x + " Minute and " + i + " Second This Session"
}, 1000);