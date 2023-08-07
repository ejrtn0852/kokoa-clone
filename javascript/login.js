const ID = document.getElementById('login-id');


const myId = {
    id : "ejrtn0852@naver.com",
    password : 1234
};
  //  myId = 임시 계정;


    function submitEvent (event) {
        event.preventDefault();
        console.log(document.getElementById('login-id').value);
    }

document.getElementById('login-id').addEventListener("submit",submitEvent);



