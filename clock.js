
function getTime() {
    const time = new Date();
    const hour = modifyNumber(time.getHours());
    const minute = modifyNumber(time.getMinutes());
    const second = modifyNumber(time.getSeconds());
    document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second;
}
document.getElementById("button").onclick = function() {
    document.getElementById("button_output").innerHTML = Math.random();
    
}
function modifyNumber(time) {
    if(parseInt(time)<10) {
        return "0"+time;
    }
    else{
        return time;
    }
}

window.onload = function() {
    getTime();
    setInterval(getTime, 1000);
}