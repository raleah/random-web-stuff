var timer = 0;
document.getElementById("timeroutput").innerHTML = timer;
defaultstat = true
var interval;

function startTimer(){
    if(defaultstat == true){
        interval = setInterval(countingUp, 1000);
        defaultstat = false;
    }  
}

function countingUp(){
	timer += 1;
	document.getElementById("timeroutput").innerHTML = timer;
}

function stopTimer(){
	clearInterval(interval);
    defaultstat = true;
}

function resetTimer(){
    stopTimer()
	timer = 0;
	document.getElementById("timeroutput").innerHTML = timer;
}