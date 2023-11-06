

function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = Zero(dateTime.getMinutes());
    let sec = Zero(dateTime.getSeconds());
    if(hr>12){
        hr=hr-12
        ampm.innerHTML ='PM'
    }
    else{
        ampm.innerHTML='AM'
    }

    document.getElementById('hours').innerHTML = Zero(hr)
    document.getElementById('mins').innerHTML = Zero(min)
    document.getElementById('seconds').innerHTML = sec

}
function Zero(num){
    return num<10?"0"+num:num
}
setInterval(displayTime,2000)