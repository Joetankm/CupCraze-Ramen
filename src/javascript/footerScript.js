function emailReceivedMessage(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email-input').value.trim();
    if (emailInput === '') {
        alert("Please enter a valid email.");
    } else {
        alert("Your email has been submitted successfully!");
        document.getElementById('subscribe-form').reset();
    }
}
