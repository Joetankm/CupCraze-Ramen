function togglePasswordVisibility(isVisible) {
    const passwordField = document.getElementById("password");
    passwordField.setAttribute("type", isVisible ? "text" : "password");
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (password.length < 10 || password.length > 40) {
        alert("Your password shall be 10 to 40 characters in length.");
        return;
    }

    alert(`Welcome back, ${username}!`);
    window.location.href = 'index.html';
});