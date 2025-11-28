// Input fields
const fullNameTF = document.getElementById("fullName");
const emailTF = document.getElementById("email");
const passwordTF = document.getElementById("password");
const confirmPasswordTF = document.getElementById("confirmPassword");
const phoneTF = document.getElementById("phone");

// Error message elements
const fullNameERR = document.getElementById("fullNameError");
const emailERR = document.getElementById("emailError");
const passwordERR = document.getElementById("passwordError");
const confirmPasswordERR = document.getElementById("confirmPasswordError");
const phoneERR = document.getElementById("phoneError");
const successMSG = document.getElementById("successMessage");

// Regex
const emailRegex = /\S+@\S+\.\S+/;   // simple email pattern
const phoneRegex = /^\d+$/;          // digits only

function formValidate() {
    const nameRegex = /^[a-zA-Z\s]+$/;
    let hasERR = false;

    // clear previous errors and success message
    fullNameERR.innerHTML = "";
    emailERR.innerHTML = "";
    passwordERR.innerHTML = "";
    confirmPasswordERR.innerHTML = "";
    phoneERR.innerHTML = "";
    successMSG.innerHTML = "";

    // Full Name
    if (fullNameTF.value.trim() === "") {
        hasERR = true;
        fullNameERR.innerHTML = "Full Name cannot be empty";
        fullNameERR.style.color = "red";
    } else if (!nameRegex.test(fullNameTF.value.trim())) {
        hasERR = true;
        fullNameERR.innerHTML = "Full Name must contain only letters";
        fullNameERR.style.color = "red";
    }

    // Email
    if (emailTF.value.trim() === "") {
        hasERR = true;
        emailERR.innerHTML = "Email cannot be empty";
        emailERR.style.color = "red";
    } else if (!emailRegex.test(emailTF.value.trim())) {
        hasERR = true;
        emailERR.innerHTML = "Invalid email format";
        emailERR.style.color = "red";
    }

    // Password
    if (passwordTF.value.length < 6) {
        hasERR = true;
        passwordERR.innerHTML = "Password must be at least 6 characters";
        passwordERR.style.color = "red";
    }

    // Confirm Password
    if (confirmPasswordTF.value !== passwordTF.value) {
        hasERR = true;
        confirmPasswordERR.innerHTML = "Passwords do not match";
        confirmPasswordERR.style.color = "red";
    }

    // Phone
    if (phoneTF.value.trim() === "") {
        hasERR = true;
        phoneERR.innerHTML = "Phone number cannot be empty";
        phoneERR.style.color = "red";
    } else if (!phoneRegex.test(phoneTF.value.trim())) {
        hasERR = true;
        phoneERR.innerHTML = "Phone number must contain only digits";
        phoneERR.style.color = "red";
    }

    if (hasERR) {
        return false;
    } else {
        successMSG.innerHTML = "Registration Successful!";
        successMSG.style.color = "green";
    }
}

// hook into the form submit (matches assignment: addEventListener)
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {
    if (!formValidate()) {
        event.preventDefault(); // stop form if validation fails
    }
});