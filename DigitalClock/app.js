let ampm = document.getElementById('ampm');
function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let date = dateTime.getDate();
    let month = dateTime.getMonth();
    let year = dateTime.getFullYear();
    let day = dateTime.getDay();
    let week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let today = week[day];
    if(hr>12){
        hr = hr - 12;
        ampm.innerHTML = 'PM'
    }
    document.getElementById('hour').innerHTML= padZero(hr);
    document.getElementById('minute').innerHTML=padZero(min);
    document.getElementById('second').innerHTML=padZero(sec);
    document.getElementById('date').innerHTML = padZero(date);
    document.getElementById('month').innerHTML = padZero(month);
    document.getElementById('year').innerHTML = year;
    document.getElementById('day').innerHTML = today;
}
function padZero(num){
    return num<10?'0'+num:num;
}
setInterval(displayTime,500);