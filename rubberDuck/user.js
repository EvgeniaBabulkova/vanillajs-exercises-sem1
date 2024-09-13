// Forms: Exercise
// ▪ Add a user button at the top right corner in the Header.
// ▪ Redirecting the user to a user.html sub page.
// ▪ Create a form, to be used for creating users on the page.
// ▪ What would be usefull when creating users?
// ▪ Atleast name, so we can get rid of the annoying popup each time we open the site.
// ▪ What would we need to validate?
// ▪ Lets create some JavaScript validation, and add custom error messages.


const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default which is instant submit, and we want to validat first


    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const usernameError = document.getElementById("username-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const successMessage = document.getElementById("success-message");


    usernameError.textContent = ""; //clearing previous error messages
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";



    let isValid = true;

    // Validate username
    if (username === "" || username.length < 3) {
        usernameError.textContent = "Username must be at least 3 characters long";
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
    }

    // Validate password
    if (password.length < 4) {
        passwordError.textContent = "Password must be at least 4 characters long";
        isValid = false;
    }


    if (isValid) {
        successMessage.textContent = "Yayy, you did it!!!!";
    }
});

