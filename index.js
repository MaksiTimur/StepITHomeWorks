// Level 3

alert("You need to register");

const userLogin = String(prompt("Enter new login"));
const userPassword = String(prompt("Enter password"));

alert("You need to login");

let tempLogin = String(prompt("Enter your login"));
let tempPassword = String(prompt("Enter your password"));
let success = true;

if (tempLogin !== userLogin) {
    success = false;
}

if (tempPassword !== userPassword) {
    success = false;
}

while (success === false) {
    alert("Incorrect login or password");
    tempLogin = String(prompt("Enter your login"));
    tempPassword = String(prompt("Enter your password"));

    if (tempLogin === userLogin && tempPassword === userPassword) {
        success = true;
    }
}

alert("Successful auth");