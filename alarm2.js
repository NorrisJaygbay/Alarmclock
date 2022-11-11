var timer = document.getElementById("timer");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var ampm = document.getElementById("ampm");
var butt_on=document.querySelector(".button");
// var startstop = document.getElementById("startstop");

var currentTime;
var alarmElement;
var activeAlarm = false;
var sound = new Audio("Alarm_Siren__Sound_FX(128k).mp3");
sound.loop = true;

function showTime(){
    var now = new Date();
    currentTime = now.toLocaleTimeString();
    if(currentTime === alarmElement){
        // alert("the tinsdjods jimklsapofa a");
        sound.play();
    }
    timer.textContent = currentTime;
    setTimeout(showTime, 1000);
}
showTime();

function addMinsec(id){
    var select = id;
    var min = 59;

    for(i = 0; i <= min; i++){
        select.options[select.options.length] = new Option(i <10 ? "0" + i : i);
    }
}

function addhour(id){
    var select = id;
    var hou = 12;

    for(i = 0; i <= hou; i++){
        select.options[select.options.length] = new Option(i);
        // <10 ? "0" + i : i
    }
}
addhour(hours);
addMinsec(minutes);
addMinsec(seconds);

function startstop(){
    if(activeAlarm === false){
        hours.disabled = true;
        minutes.disabled = true;
        seconds.disabled = true;
        ampm.disabled = true;

        alarmElement = hours.value+":"+minutes.value+":"+seconds.value+" "+ampm.value;
        activeAlarm = true;
        butt_on.textContent = "Clear Alarm";
        // alert(currentTime + alarmElement);
        // + seconds.value +" "
    }
    else{
        hours.disabled = false;
        minutes.disabled = false;
        seconds.disabled = false;
        ampm.disabled = false;

        sound.pause();
        butt_on.textContent = "Set Alarm";
        activeAlarm = false;
    }
}