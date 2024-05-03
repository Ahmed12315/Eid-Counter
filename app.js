var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");


setInterval(function() {
    var eidDate = new Date("6/17/24");
    var now = new Date();
    var miliseconds = now.getTime();
    var diff = (eidDate.getTime() - miliseconds) / 1000;
    days.innerText = Math.floor(diff/3600/24);

    if(((diff/3600)%24) < 10){
        var remaininghours = "0" + Math.round(diff /3600) % 24;
    }else{
        remaininghours = Math.round(diff /3600) % 24;
    }
    hours.innerText = remaininghours;

    if((diff/60)%60 < 10){
       var remainingMinute = "0" + Math.floor(diff/60)%60;
    }else{
        remainingMinute = Math.floor(diff/60)%60;
    }
    minutes.innerText = remainingMinute ;
    
    if((diff)%60 < 10){
        var remainingSecond = "0" + Math.floor(diff)%60;
    }else{
        remainingSecond = Math.floor(diff)%60;
    }
    seconds.innerText = remainingSecond;
    
}, 1000);

