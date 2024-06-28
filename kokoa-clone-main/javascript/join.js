// import { joinSelector } from "../utils or helpers/classData";
import { regex } from "../utils or helpers/regex.js";


const joinInputForm = document.querySelector("#join-form");
const joinUserName = document.getElementById("user-name");
const joinUserPhone = document.getElementById("user-phone");
const joinUserEmail = document.getElementById("user-email");
const joinUserId = document.getElementById("user-id");
const joinUserPw = document.getElementById("user-pw");
const errorHandle  = document.querySelectorAll("input");



let regBool = false;





// 정규식 검사가 틀리다면 어디가 틀렸는지 placeholder, boder 색으로 알려주고 form의 onsubmit을 false를 유지함
function infoCheck() {
    if(!regex.name.test(joinUserName.value)){
        joinUserName.focus();
        joinUserName.style.borderBottom = "1px solid tomato";
        return regBool = false;
    }else {} regBool = true;
    if(!regex.phone.test(joinUserPhone.value)){
        joinUserPhone.focus();
        joinUserPhone.style.borderBottom = "1px solid tomato";
        return regBool = false;
    }else return regBool = true;
    if(!regex.email.test(joinUserEmail.value)) {
        joinUserEmail.focus();
        joinUserEmail.style.borderBottom = "1px solid tomato";
        return regBool = false;
    } else return regBool = true;
    if(!regex.id.test(joinUserId.value)){
        joinUserId.focus();
        joinUserId.style.borderBottom = "1px solid tomato";
        return regBool = false;
    } else return regBool = true;
    if(!regex.pw.test(joinUserPw.value)){
        joinUserPw.focus();
        joinUserPw.style.borderBottom = "1px solid tomato";
        return regBool = false;
    } else return regBool = true;
    if(!regBool) joinInputForm.onsubmit = "return false";
    else {
        regBool = true;
        joinInputForm.onsubmit = "return true";
        return regBool = true;
    }
}







joinInputForm.addEventListener("submit", infoCheck);
// joinInputForm.addEventListener("submit", regTest);

