document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cartTab')) || [];
    const total = parseFloat(localStorage.getItem('totalPrice')) || 0.00;

    const orderSummary = document.getElementById('orderSummary');

    Object.values(cart).forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.imageSrc}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-content">
                <span class="cart-item-name">${item.name}</span>
                <div class="cart-item-info">
                    <span class="cart-item-price">RM ${(item.price).toFixed(2)}</span>
                    <span class="cart-item-quantity"><span class="quantity">Quantity: ${item.quantity}</span></span>
                </div>
            </div>
        `;
        orderSummary.appendChild(itemElement);
    });

    const TaxFees = total*0.1;
    const totalWithTax = total + TaxFees;
    const totalSubtotal = totalWithTax - TaxFees;

    const totalsubAmountElement = document.getElementById('subAmount');
    totalsubAmountElement.className = 'total-price';
    totalsubAmountElement.textContent = `RM${totalSubtotal.toFixed(2)}`;

    const taxElement = document.getElementById('taxAmount');
    taxElement.textContent = `RM${TaxFees.toFixed(2)}`;

    const totalSumElement = document.getElementById('totalsum');
    totalSumElement.className = 'total-price';
    totalSumElement.textContent = `RM${totalWithTax.toFixed(2)}`;
    
});
