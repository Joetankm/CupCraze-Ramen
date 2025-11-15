document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!email || !username || !password || !confirmPassword) {
        alert('All fields marked with * are required.');
        return;
    }

    if (password.length < 10 || password.length > 40) {
        alert('Password must be 10-40 characters in length.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    alert('Registration successful!!');
    window.location.href = 'index.html';
});

