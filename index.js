// Level 3

alert("You need to register");

const userLogin = String(prompt("Create new login"));
const userPassword = String(prompt("Create password"));

alert("You need to login");

let tempLogin = String(prompt("Enter your login"));
let tempPassword = String(prompt("Type your password"));
let success = true;

if (tempLogin !== userLogin) {
    success = false;
}

if (tempPassword !== userPassword) {
    success = false;
}

while (success === false) {
    tempLogin = String(prompt("Enter your login"));
    tempPassword = String(prompt("Type your password"));

    if (tempLogin === userLogin && tempPassword === userPassword) {
        success = true;
    }
}

if (success === true) {
    alert("Successful auth");
} else {
    alert("Incorrect login or password");
}