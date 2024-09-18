let lowerdata = "abcdefghijklmnopqrstuvwxyz";
let upperdata = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numdata = "1234567890";
let symdata = "!@#$%^&*()_+-={}|[]";

let passwordInput = document.getElementById("passwordInput");
let passwordlength = document.getElementById("passwordlength");
let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let sym = document.getElementById("sym");
let num = document.getElementById("num");

function randomNumber(data) {
   return data[Math.floor(Math.random()*data.length)];
}

function generate(password = "") {
    if (upper.checked) {
        password += randomNumber(upperdata);
    }
    if (lower.checked) {
        password += randomNumber(lowerdata);
    }
    if (num.checked) {
        password += randomNumber(numdata);
    }
    if (sym.checked) {
        password += randomNumber(symdata);
    }

    if (password.length < passwordlength.value) {
        return generate(password);
    }

    passwordInput.value = password;
    console.log(password);
}
function myFun() {
    generate();
}

function copied() {
    alert("password  copied");
}