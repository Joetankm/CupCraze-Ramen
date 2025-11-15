const iconCart = document.querySelector('.icon-cart');
const closeCart = document.querySelector('.cls');
const body = document.querySelector('body');
const iconCartSpan = document.querySelector('.icon-cart span');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total');
const totalQuantityElement = document.getElementById('total-quantity');
const checkout = document.getElementById('checkout');

let totalPrice = 0;
let totalQuantity = 0;
let cart = {};

if (iconCart) {
    iconCart.addEventListener('click', () => {
        body.classList.toggle('showCart');
    });
}

if (closeCart) {
    closeCart.addEventListener('click', () => {
        body.classList.toggle('showCart');
    });
}

document.querySelectorAll('.icon[data-product]').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product');
        const productElement = button.closest('.listItem');
        const productName = productElement.querySelector('.list-img').alt; // Using alt text as product name
        const productPrice = parseFloat(button.getAttribute('data-price'));
        const productImageSrc = productElement.querySelector('.list-img').getAttribute('src');

        if (cart[productId]) {
            cart[productId].quantity += 1;
        } else {
            cart[productId] = {
                name: productName,
                price: productPrice,
                imageSrc: productImageSrc,
                quantity: 1
            };
        }

        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = '';
    totalPrice = 0;
    totalQuantity = 0;

    for (let productId in cart) {
        const cartItem = cart[productId];
        totalPrice += cartItem.price * cartItem.quantity;
        totalQuantity += cartItem.quantity;

        const listItem = document.createElement('li');
        listItem.classList.add('cart-item');
        listItem.innerHTML = `
            <img src="${cartItem.imageSrc}" alt="${cartItem.name}" class="cart-item-img">
            <div class="cart-item-content">
                <span class="cart-item-name">${cartItem.name}</span>
                <div class="cart-item-info">
                    <span class="cart-item-price">RM ${(cartItem.price).toFixed(2)}</span>
                    <span class="cart-item-quantity"><span class="quantity">Quantity: ${cartItem.quantity}</span></span>
                </div>
            </div>
        `;
        cartItems.appendChild(listItem);
    }

    totalPriceElement.textContent = `${totalPrice.toFixed(2)}`;
    iconCartSpan.innerText = totalQuantity;
}

function redirectToPayment() {
    window.location.href = 'payment.html';
}

if (checkout) {
    checkout.addEventListener('click', () => {
        if (totalQuantity > 0) { // new condition added
            localStorage.setItem('cartTab', JSON.stringify(cart));
            localStorage.setItem('totalPrice', totalPrice.toFixed(2));
            setTimeout(redirectToPayment, 2000);
        } else {
            alert("Please add at least one product to cart.");
        }
    });
}