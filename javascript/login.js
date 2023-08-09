const userID = document.getElementById("login-id");
const userPW = document.getElementById("login-pw");
const loginForm = document.getElementById("login-input");
const loginError = document.getElementById("login-error");

let userIdCheck = false;
let userPwCheck = false;

// 몽고같은느낌
const userObj = {
    id: "ejrtn0852",
    password : "1234"
};

// 아이디가 유효하지 않을 시 boder에 빨간 줄 형성 시키는 기능.
function redline () {
    if (userIdCheck ){
        userID.focus();
        loginError.style.display = "flex";
        userID.style.borderBottom = "1px solid tomato";
    }
    if (userPwCheck) {
        userPW.focus();
        loginError.style.display = "flex";
        userPW.style.borderBottom = "1px solid tomato";
    }
}

function idError() {
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




loginForm.addEventListener('submit',idError);



