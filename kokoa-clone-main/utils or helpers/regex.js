

export const regex = {
    name : /^[가-힣]{3}$/,
    phone : /^01[016789]-\d{3,4}-\d{4}$/,
    email : /^[0-9a-zA-z]([0-9a-zA-Z])*@[a-z]*\.[a-z]{2,3}$/,
    id : /^[a-z]+[a-z0-9]{4,20}$/,
    pw : /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
};

// const regexName = /^[가-힣]{3}$/;
// const regexPhone = /^01 ([0|1])?([0-9]{3,4})?([0-9]{4})$/;
// const regexEmail = /^[0-9a-zA-z]([0-9a-zA-Z])*@[a-z]*\.[a-z]{2,3}$/;
// const regexId = /^[a-z]+[a-z0-9]{4,20}$/;
// const regexPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
