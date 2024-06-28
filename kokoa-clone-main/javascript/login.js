const userID = document.getElementById("login-id");
const userPW = document.getElementById("login-pw");
const loginForm = document.getElementById("login-input");
const loginError = document.getElementById("login-error");
const joinSreen = document.querySelector("#login-input__join > input");
const joinDisplay = document.querySelector(".join-main");
const body = document.querySelector("body");
let userIdCheck = false;
let userPwCheck = false;
let joinCnt = false;

const color = {
    tomato : "tomato",
    blue : "blue"
}

const userObj = {
    id: "ejrtn0852",
    password : "1234"
};

// 아이디가 유효하지 않을 시 boder에 빨간 줄 형성 시키는 기능.
const redline = () => {
    if (userIdCheck ){
        userID.focus();
        loginError.style.display = "flex";
        userID.style.borderBottom = `1px solid ${color.tomato}`;
    }
    if (userPwCheck) {
        userPW.focus();
        loginError.style.display = "flex";
        userPW.style.borderBottom = `1px solid ${color.tomato}`;
    }
}

const idError = () => {
    if(userID.value !== userObj.id || !userID.value){
        userIdCheck = true;
        redline();
    } 
    if(userPW.value !== userObj.password || !userPW.value) {
        userPwCheck = true;
        redline();
    } 
    if(userID.value === userObj.id && userPW.value === userObj.password) {
        loginForm.onsubmit = "return true";
    }
}

const joinSrceenHandler = function () {
    console.log("함수실행")
    joinCnt = true;
    if(joinCnt) {
        joinDisplay.style.display = "flex";
        body.classList.add("join-rgba");
    }
    // todo 백그라운드 오파시티처리 끄고 켜기 등등 미완.;
}




loginForm.addEventListener('submit',idError);
joinSreen.addEventListener("click", joinSrceenHandler);




