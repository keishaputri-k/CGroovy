//Login Page
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function (event) {
        const ageInput = document.getElementById("age");
        const age = parseInt(ageInput.value);

        if (age < 13) {
            event.preventDefault();
            alert("You must be at least 13 years old to register.");
        }
    });
});