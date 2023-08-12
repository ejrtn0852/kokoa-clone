
const setHours = document.querySelector(".login-top-bar__clock > span");

const time = function() {
    const date = new Date();
    const hours = date.getHours();
    if(hours > 12) hours%12;
    const ampm = hours > 12 ? "PM" : "AM";
    if(date.getMinutes() < 10) setHours.innerText = `${hours}:0${date.getMinutes()}${ampm}`
}

setInterval(time,1000); 


