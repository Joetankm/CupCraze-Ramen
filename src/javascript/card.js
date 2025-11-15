function validateField(input, minLength) {
    input.addEventListener('input', function() {
        input.style.borderColor = input.value.length >= minLength ? 'green' : 'red';
    });
}

validateField(document.getElementById('first-name'), 1);
validateField(document.getElementById('last-name'), 1);
validateField(document.getElementById('phone'), 10);
validateField(document.getElementById('address'), 5);
validateField(document.getElementById('country'), 2);
validateField(document.getElementById('postcode'), 5);
validateField(document.getElementById('email'), 1);
validateField(document.getElementById('cvv'), 3);

let cNumber = document.getElementById('number');
cNumber.addEventListener('input', function() {
    let num = cNumber.value.replace(/\s/g, '');
    let formattedNum = '';

    for (let i = 0; i < num.length; i++) {
        if (i % 4 === 0 && i > 0) formattedNum += ' ';
        formattedNum += num[i];
    }
    cNumber.value = formattedNum;

    let ccNum = document.getElementById('c-number');
    ccNum.style.borderColor = num.length === 16 ? 'green' : 'red';
});

let eDate = document.getElementById('e-date');
eDate.addEventListener('input', function(e) {
    let newInput = eDate.value;
    let numChars = newInput.length;
    let isValidFormat = false;

    if (numChars >= 2) {
        let monthPart = newInput.slice(0, 2);
        if (parseInt(monthPart) > 0 && parseInt(monthPart) <= 12) {
            if (numChars === 2 && !newInput.endsWith('/')) {
                eDate.value = newInput + '/';
            }
        }
    }

    if (numChars === 5) {
        let monthPart = newInput.slice(0, 2);
        let yearPart = newInput.slice(3, 5);
        if (parseInt(monthPart) > 0 && parseInt(monthPart) <= 12 && parseInt(yearPart) >= 24) {
            isValidFormat = true;
        }
    }

    eDate.style.borderColor = isValidFormat ? 'green' : 'red';
});

let cvv = document.getElementById('cvv');
cvv.addEventListener('keyup', function(e){

 let elen = cvv.value;
 let cvvBox = document.getElementById('cvv-box');
 if(elen.length<3){
  cvvBox.style.borderColor='red';
 }else{
  cvvBox.style.borderColor='green';
 }
})

email.addEventListener('input', function(e) {
    const emailValue = email.value;
    const hasAtSymbol = emailValue.includes('@');
    const hasDotAfterAt = hasAtSymbol && emailValue.indexOf('.', emailValue.indexOf('@')) > emailValue.indexOf('@') + 1;
    const validDomainFormat = hasDotAfterAt && emailValue.split('@')[1].split('.')[1]?.length >= 2;

    if (hasAtSymbol && hasDotAfterAt && validDomainFormat) {
        email.style.borderColor = 'green';
    } else {
        email.style.borderColor = 'red';
    }
});

    const placeOrderBtn = document.getElementById('pay-button');
    const orderPopup = document.getElementById('orderPopup');
    const allInputs = [
        document.getElementById('c-number'),
        document.getElementById('email'),
        document.getElementById('cvv-box'),
        document.getElementById('e-date'),
        document.getElementById('first-name'),
        document.getElementById('last-name'),
        document.getElementById('phone'),
        document.getElementById('address'),
        document.getElementById('country'),
        document.getElementById('postcode')
    ];
    
    function redirectToHome() {
        window.location.href = 'index.html';
    }
    
    placeOrderBtn.addEventListener('click', (event) => {
        event.preventDefault();
        allFieldsValid = true;
        allInputs.forEach(input => {
            if (input.style.borderColor !== 'green') {
                allFieldsValid = false;
                input.style.borderColor = 'red';
            } 
        });
    
        if (allFieldsValid) {
            setTimeout(() => {
                orderPopup.style.display = 'block';
                setTimeout(() => {
                  orderPopup.classList.add('visible');
                }, 10);
              }, 1000)
        } else {
            alert('Please fill out all fields correctly.');
        }
    });

    document.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById('finish-button').addEventListener('click', () => {
            setTimeout(redirectToHome, 2000);
        });
    });