var timeoutHandle;
function countdownReset(initialMinutes){
    var seconds = 60;
    var minutes = initialMinutes;
    function count(){
        seconds --;
        var counterMins = minutes-1;
        var toStringMinutes = counterMins.toString();
        var countdownItem= document.getElementById("countdownItem");
        countdownItem.innerHTML = toStringMinutes + ':' + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0){
            timeoutHandle = setTimeout(count, 1000);
        }else {
            if(minutes > 1){
                setTimeout(function(){countdownReset(minutes-1);},1000);
            }
        document.getElementById("countdownItem").innerHTML = "0:00"
        }
    }
    count();
}