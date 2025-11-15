document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const phoneNumber = document.getElementById('phoneNo').value;
    const phoneNumberLength = phoneNumber.replace(/[^0-9]/g, '').length;
    const phoneNumberValid = /^\d+$/.test(phoneNumber);

    if (!phoneNumberValid) {
        alert('Please enter a valid phone number containing only digits.');
        return;
    }

    if (phoneNumberLength < 7 || phoneNumberLength > 15) {
        alert('Please enter a valid phone number with 7 to 15 digits.');
        return;
    }

    alert('Your message has been sent.\nWe will get back to you soon.');
    
    document.getElementById('contactForm').reset();
});