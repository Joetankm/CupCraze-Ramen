document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Password reset instructions have been sent to your email.\nPlease check your mailbox.');
    window.location.href = "login.html"
});