// global
const setHours = document.querySelector(".login-top-bar__clock > span");

// {SetHours -> 메모리에 주소 저장} {setHours : memory에 바인딩}
// document.querySelector(".login-top-bar__clock > span"); 애는 함수 콘텍스트에서 시작 


// time은 변수에 함수를 담은 표현식이기 떄문에 한줄씩 실행되는 자바스크립트 코드에서 const time 이라는 변수에 할당문을 만났을때 함수가 선언됨.

const time = function() {
    const date = new Date();
    const hours = date.getHours() % 12;
    const ampm = hours < 12 ? "PM" : "AM";
    if(date.getMinutes() < 10) setHours.innerText = `${hours}:0${date.getMinutes()}${ampm}`
    else setHours.innerText = `${hours}:${date.getMinutes()}${ampm}`
}

setInterval(time,1000); 


