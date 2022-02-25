var monthChoice = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var dayChoice = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();
var day = dayChoice[date.getDay()];
var month = monthChoice[date.getMonth()];
var dateNow = date.getDate();

if(hour == 12){
    if(minutes < 10){
        minutes = "0" + minutes
    }
    minutes += "PM"
} else if (hour > 12){
    hour = hour - 12
    if(minutes < 10){
        minutes = "0" + minutes
    }
    minutes += "PM"
} else {
    if(minutes < 10){
        minutes = "0" + minutes
    }
    minutes += "AM"
}

var timeDisplay = "It is currently : " + hour + ":" + minutes + " on " + day + " , " + month + " " + dateNow

document.write("Time: " + hour + ":" + minutes + "<br/>");
document.write("Day: " + day + "<br/>");
document.write("Month: " + month + "<br/>");
document.write("Date: " + dateNow + "<br/>");
document.write(timeDisplay.italics().bold());