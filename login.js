document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const registeredUsername = localStorage.getItem("registeredUsername");
        const registeredPassword = localStorage.getItem("registeredPassword");
        if (username === registeredUsername && password === registeredPassword) {
            alert("Login successful!");
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
