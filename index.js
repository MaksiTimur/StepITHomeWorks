// Level 4

register: while (true) {
    alert("You need to register");

    const userLogin = String(prompt("Enter new login"));
    const userPassword = String(prompt("Enter password"));

    login: while (true) {
        let attempts = 3;

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

        while (!success) {
            --attempts; // Максимум попыток 3, включая изначальную

            if (attempts > 0) {

                alert(`Incorrect login or password. Attempts: ${attempts}`);
                tempLogin = String(prompt("Enter your login"));
                tempPassword = String(prompt("Enter your password"));

                if (tempLogin === userLogin && tempPassword === userPassword) {
                    success = true;
                    break login;
                }
            } else {
                if (confirm("Want to create new account?")) {
                    continue register;
                } else {
                    continue login;
                }
                
            }
        }
    }

    alert("Successful auth");
    break;
}