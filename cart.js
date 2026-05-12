/**
 * Hat Bazar - Cart JavaScript File
 * Handles all shopping cart functionality
 */

// ============================================
// CART STATE MANAGEMENT
// ============================================

// Cart storage key
const CART_KEY = 'cart';
const WISHLIST_KEY = 'wishlist';

/**
 * Get cart from localStorage
 * @returns {Array} Cart items
 */
function getCart() {
    try {
        const cart = localStorage.getItem(CART_KEY);
        return cart ? JSON.parse(cart) : [];
    } catch (e) {
        console.error('Error reading cart:', e);
        return [];
    }
}
window.getCart = getCart;

/**
 * Save cart to localStorage
 * @param {Array} cart - Cart items
 */
function saveCart(cart) {
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
        updateCartCount();
    } catch (e) {
        console.error('Error saving cart:', e);
    }
}
window.saveCart = saveCart;

/**
 * Get wishlist from localStorage
 * @returns {Array} Wishlist items
 */
function getWishlist() {
    try {
        const wishlist = localStorage.getItem(WISHLIST_KEY);
        return wishlist ? JSON.parse(wishlist) : [];
    } catch (e) {
        console.error('Error reading wishlist:', e);
        return [];
    }
}
window.getWishlist = getWishlist;

/**
 * Save wishlist to localStorage
 * @param {Array} wishlist - Wishlist items
 */
function saveWishlist(wishlist) {
    try {
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    } catch (e) {
        console.error('Error saving wishlist:', e);
    }
}
window.saveWishlist = saveWishlist;

// ============================================
// CART OPERATIONS
// ============================================

/**
 * Add item to cart
 * @param {Object} product - Product object
 * @returns {boolean} Success status
 */
function addToCart(product) {
    if (!product || !product.id) {
        console.error('Invalid product data');
        return false;
    }

    const cart = getCart();

    // Check if product already in cart
    const existingItem = cart.find(item => item.id == product.id);

    if (existingItem) {
        // Update quantity
        existingItem.quantity = (existingItem.quantity || 1) + (product.quantity || 1);
    } else {
        // Add new item
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image || product.imageColor || '#E63946',
            quantity: product.quantity || 1,
            category: product.category,
            addedAt: new Date().toISOString()
        });
    }

    saveCart(cart);
    showToast(`${product.name} added to cart!`, 'success');
    return true;
}
window.addToCart = addToCart;

/**
 * Remove item from cart
 * @param {string|number} productId - Product ID
 * @returns {boolean} Success status
 */
function removeFromCart(productId) {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.id != productId);

    if (updatedCart.length === cart.length) {
        return false;
    }

    saveCart(updatedCart);

    // Re-render cart page if on cart page
    if (document.querySelector('.cart-page')) {
        renderCartPage();
    }

    showToast('Item removed from cart', 'success');
    return true;
}
window.removeFromCart = removeFromCart;

/**
 * Update item quantity in cart
 * @param {string|number} productId - Product ID
 * @param {number} quantity - New quantity
 * @returns {boolean} Success status
 */
function updateQuantity(productId, quantity) {
    if (quantity < 1) {
        removeFromCart(productId);
        return true;
    }

    const cart = getCart();
    const item = cart.find(item => item.id == productId);

    if (!item) {
        return false;
    }

    item.quantity = quantity;
    saveCart(cart);

    // Re-render cart page if on cart page (deferred to avoid destroying active input)
    if (document.querySelector('.cart-page')) {
        setTimeout(renderCartPage, 0);
    }

    return true;
}
window.updateQuantity = updateQuantity;

/**
 * Clear entire cart
 */
function clearCart() {
    localStorage.removeItem(CART_KEY);
    updateCartCount();

    if (document.querySelector('.cart-page')) {
        renderCartPage();
    }

    showToast('Cart cleared', 'success');
}
window.clearCart = clearCart;

// ============================================
// CART CALCULATIONS
// ============================================

/**
 * Get cart total price
 * @returns {number} Total price
 */
function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => {
        return total + (item.price * (item.quantity || 1));
    }, 0);
}
window.getCartTotal = getCartTotal;

/**
 * Get cart item count
 * @returns {number} Item count
 */
function getCartItemCount() {
    const cart = getCart();
    return cart.reduce((count, item) => count + (item.quantity || 1), 0);
}
window.getCartItemCount = getCartItemCount;

/**
 * Calculate cart summary with discounts
 * @param {number} discountPercent - Discount percentage
 * @param {number} shippingCost - Shipping cost
 * @returns {Object} Cart summary
 */
function getCartSummary(discountPercent = 0, shippingCost = 0) {
    const subtotal = getCartTotal();
    const discount = (subtotal * discountPercent) / 100;
    const total = subtotal - discount + shippingCost;

    return {
        subtotal,
        discount,
        shipping: shippingCost,
        total,
        itemCount: getCartItemCount()
    };
}
window.getCartSummary = getCartSummary;

// ============================================
// WISHLIST OPERATIONS
// ============================================

/**
 * Add item to wishlist
 * @param {Object} product - Product object
 * @returns {boolean} Success status
 */
function addToWishlist(product) {
    if (!product || !product.id) {
        return false;
    }

    const wishlist = getWishlist();

    // Check if already in wishlist
    if (wishlist.find(item => item.id == product.id)) {
        showToast('Item already in wishlist!', 'warning');
        return false;
    }

    wishlist.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image || product.imageColor || '#E63946',
        category: product.category,
        addedAt: new Date().toISOString()
    });

    saveWishlist(wishlist);
    showToast(`${product.name} added to wishlist!`, 'success');
    return true;
}
window.addToWishlist = addToWishlist;

/**
 * Remove item from wishlist
 * @param {string|number} productId - Product ID
 * @returns {boolean} Success status
 */
function removeFromWishlist(productId) {
    const wishlist = getWishlist();
    const updatedWishlist = wishlist.filter(item => item.id != productId);

    if (updatedWishlist.length === wishlist.length) {
        return false;
    }

    saveWishlist(updatedWishlist);

    // Re-render wishlist page if on wishlist page
    if (document.querySelector('.wishlist-page')) {
        renderWishlistPage();
    }

    showToast('Item removed from wishlist', 'success');
    return true;
}
window.removeFromWishlist = removeFromWishlist;

/**
 * Check if item is in wishlist
 * @param {string|number} productId - Product ID
 * @returns {boolean} Is in wishlist
 */
function isInWishlist(productId) {
    const wishlist = getWishlist();
    return wishlist.some(item => item.id == productId);
}
window.isInWishlist = isInWishlist;

/**
 * Move item from wishlist to cart
 * @param {string|number} productId - Product ID
 */
function moveToCart(productId) {
    const wishlist = getWishlist();
    const item = wishlist.find(item => item.id == productId);

    if (item) {
        addToCart({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            category: item.category,
            quantity: 1
        });
        removeFromWishlist(productId);
        return true;
    }
    return false;
}
window.moveToCart = moveToCart;

// ============================================
// CART PAGE RENDERING
// ============================================

/**
 * Render cart page content
 */
function renderCartPage() {
    const cartContainer = document.querySelector('.cart-items');
    const summaryContainer = document.querySelector('.cart-summary');

    if (!cartContainer) return;

    const cart = getCart();

    if (cart.length === 0) {
        renderEmptyCart(cartContainer);
        if (summaryContainer) summaryContainer.style.display = 'none';
        return;
    }

    if (summaryContainer) summaryContainer.style.display = 'block';

    // Render cart table
    let html = `
        <table class="cart-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
    `;

    cart.forEach(item => {
        const subtotal = item.price * (item.quantity || 1);
        const imgSrc = item.image || '';
        const imageContent = imgSrc.startsWith('#')
            ? `<div class="placeholder-img" style="background-color: ${imgSrc}; font-size: 2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></div>`
            : `<img src="${imgSrc}" alt="${item.name}">`;

        html += `
            <tr data-id="${item.id}">
                <td data-label="Product">
                    <div class="cart-product">
                        <div class="cart-product-img">
                            ${imageContent}
                        </div>
                        <div class="cart-product-info">
                            <h4><a href="product-detail.html?id=${item.id}">${item.name}</a></h4>
                            <p>${item.category || 'General'}</p>
                        </div>
                    </div>
                </td>
                <td data-label="Price">${formatPrice(item.price)}</td>
                <td data-label="Quantity">
                    <div class="cart-quantity">
                        <button class="qty-decrease" data-id="${item.id}">-</button>
                        <input type="number" value="${item.quantity || 1}" min="1" max="99" data-id="${item.id}" class="qty-input">
                        <button class="qty-increase" data-id="${item.id}">+</button>
                    </div>
                </td>
                <td data-label="Subtotal" class="font-bold">${formatPrice(subtotal)}</td>
                <td data-label="">
                    <button class="cart-remove" data-id="${item.id}" title="Remove item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path></svg>
                    </button>
                </td>
            </tr>
        `;
    });

    html += '</tbody></table>';
    cartContainer.innerHTML = html;

    // Add event listeners
    attachCartEventListeners();

    // Update summary
    updateCartSummary();
    refreshIcons();
}
window.renderCartPage = renderCartPage;

/**
 * Render empty cart state
 */
function renderEmptyCart(container) {
    container.innerHTML = `
        <div class="empty-cart">
            <div class="empty-cart-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--gray-300)"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </div>
            <h3>Your cart is empty</h3>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <a href="products.html" class="btn btn-primary">Continue Shopping</a>
        </div>
    `;
    refreshIcons();
}

/**
 * Attach event listeners to cart elements
 */
function attachCartEventListeners() {
    // Quantity decrease
    document.querySelectorAll('.qty-decrease').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            const input = document.querySelector(`.qty-input[data-id="${id}"]`);
            const newQty = parseInt(input.value) - 1;
            if (newQty < 1) {
                if (confirmAction('Remove this item from cart?')) {
                    removeFromCart(id);
                }
            } else {
                input.value = newQty;
                updateQuantity(id, newQty);
            }
        });
    });

    // Quantity increase
    document.querySelectorAll('.qty-increase').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            const input = document.querySelector(`.qty-input[data-id="${id}"]`);
            const newQty = parseInt(input.value) + 1;
            if (newQty <= 99) {
                input.value = newQty;
                updateQuantity(id, newQty);
            }
        });
    });

    // Quantity input change
    document.querySelectorAll('.qty-input').forEach(input => {
        input.addEventListener('change', function() {
            const id = this.dataset.id;
            let newQty = parseInt(this.value);
            if (newQty < 1) newQty = 1;
            if (newQty > 99) newQty = 99;
            this.value = newQty;
            updateQuantity(id, newQty);
        });
    });

    // Remove buttons
    document.querySelectorAll('.cart-remove').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            if (confirmAction('Are you sure you want to remove this item?')) {
                removeFromCart(id);
            }
        });
    });
}

/**
 * Update cart summary sidebar
 */
function updateCartSummary() {
    const summaryContainer = document.querySelector('.cart-summary');
    if (!summaryContainer) return;

    // Retrieve active discount from local storage, default to 0
    const discountPercent = parseInt(localStorage.getItem('cartDiscount') || '0');
    
    // Calculate shipping (free shipping on orders over ৳2000)
    const cartTotal = getCartTotal();
    const shipping = cartTotal >= 2000 ? 0 : 60;
    
    const summary = getCartSummary(discountPercent, shipping);

    summaryContainer.innerHTML = `
        <h3>Order Summary</h3>
        <div class="summary-row">
            <span>Subtotal (${summary.itemCount} items)</span>
            <span>${formatPrice(summary.subtotal)}</span>
        </div>
        <div class="summary-row">
            <span>Shipping</span>
            <span>${summary.shipping > 0 ? formatPrice(summary.shipping) : 'Free'}</span>
        </div>
        <div class="summary-row discount">
            <span>Discount${discountPercent > 0 ? ` (${discountPercent}%)` : ''}</span>
            <span>-${formatPrice(summary.discount)}</span>
        </div>
        <form class="discount-form" onsubmit="applyDiscountCode(event)">
            <input type="text" placeholder="Enter promo code" id="discount-code">
            <button type="submit" class="btn btn-secondary btn-sm">Apply</button>
        </form>
        <div class="summary-row total">
            <span>Total</span>
            <span>${formatPrice(summary.total)}</span>
        </div>
        <a href="checkout.html" class="btn btn-primary btn-block btn-lg">Proceed to Checkout</a>
        <p class="text-center mt-2" style="font-size: 0.85rem; color: var(--gray-600);">
            Free shipping on orders over ৳2000
        </p>
    `;
}

/**
 * Apply discount code
 * @param {Event} e - Form submit event
 */
function applyDiscountCode(e) {
    e.preventDefault();
    let codeInput = document.getElementById('discount-code')?.value.trim();
    
    if (!codeInput) {
        showToast('Please enter a promo code', 'warning');
        return;
    }

    // Normalize string so "Hat Bazar" and "HATBAZAR" both work
    const code = codeInput.toUpperCase().replace(/\s+/g, '');

    // Simple promo codes
    const validCodes = {
        'HAT10': 10,
        'SALE20': 20,
        'WELCOME': 15,
        'BANGLA50': 50,
        'HATBAZAR': 10
    };

    if (code in validCodes) {
        const discount = validCodes[code];
        localStorage.setItem('cartDiscount', discount);
        showToast(`${discount}% discount applied!`, 'success');
        updateCartSummary(); // Dynamically re-render the summary
    } else {
        showToast('Invalid promo code', 'error');
    }
}
window.applyDiscountCode = applyDiscountCode;

// ============================================
// WISHLIST PAGE RENDERING
// ============================================

/**
 * Render wishlist page content
 */
function renderWishlistPage() {
    const container = document.querySelector('.wishlist-grid');
    if (!container) return;

    const wishlist = getWishlist();

    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <div class="empty-state-icon"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--gray-300)"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
                <h3>Your wishlist is empty</h3>
                <p>Save your favorite items here to view them later.</p>
                <a href="products.html" class="btn btn-primary">Start Shopping</a>
            </div>
        `;
        return;
    }

    let html = '';
    wishlist.forEach(item => {
        const imgSrc = item.image || '';
        const imageContent = imgSrc.startsWith('#')
            ? `<div class="placeholder-img" style="background-color: ${imgSrc}; height: 200px;"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></div>`
            : `<img src="${imgSrc}" alt="${item.name}" style="height: 200px; object-fit: cover;">`;

        html += `
            <div class="wishlist-card">
                <button class="wishlist-remove" data-id="${item.id}" title="Remove from wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <a href="product-detail.html?id=${item.id}">
                    <div class="product-card-image">
                        ${imageContent}
                    </div>
                </a>
                <div class="product-card-content">
                    <span class="product-card-category">${item.category || 'General'}</span>
                    <h3 class="product-card-title">
                        <a href="product-detail.html?id=${item.id}">${item.name}</a>
                    </h3>
                    <div class="product-card-price">
                        <span class="product-card-current-price">${formatPrice(item.price)}</span>
                    </div>
                </div>
                <div class="wishlist-actions">
                    <button class="btn btn-primary btn-block btn-sm" onclick="moveToCart('${item.id}')">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    // Attach remove listeners
    container.querySelectorAll('.wishlist-remove').forEach(btn => {
        btn.addEventListener('click', function() {
            removeFromWishlist(this.dataset.id);
        });
    });
    refreshIcons();
}
window.renderWishlistPage = renderWishlistPage;

// ============================================
// CHECKOUT PAGE FUNCTIONALITY
// ============================================

/**
 * Render checkout order summary
 */
function renderCheckoutSummary() {
    const container = document.querySelector('.checkout-items');
    const totalsContainer = document.querySelector('.checkout-totals');

    if (!container) return;

    const cart = getCart();
    // Apply same discount + free-shipping logic as cart page
    const discountPercent = parseInt(localStorage.getItem('cartDiscount') || '0');
    const cartTotal = getCartTotal();
    const shipping = cartTotal >= 2000 ? 0 : 60;
    const summary = getCartSummary(discountPercent, shipping);

    // Render items
    let itemsHtml = '';
    cart.forEach(item => {
        const imgSrc = item.image || '';
        const imageContent = imgSrc.startsWith('#')
            ? `<div class="placeholder-img" style="background-color: ${imgSrc};"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></div>`
            : `<img src="${imgSrc}" alt="${item.name}">`;

        itemsHtml += `
            <div class="checkout-item">
                <div class="checkout-item-img">${imageContent}</div>
                <div class="checkout-item-info">
                    <h4>${item.name}</h4>
                    <p>Qty: ${item.quantity || 1}</p>
                </div>
                <span class="checkout-item-price">${formatPrice(item.price * (item.quantity || 1))}</span>
            </div>
        `;
    });

    container.innerHTML = itemsHtml;

    // Render totals
    if (totalsContainer) {
        totalsContainer.innerHTML = `
            <div class="summary-row">
                <span>Subtotal</span>
                <span>${formatPrice(summary.subtotal)}</span>
            </div>
            <div class="summary-row">
                <span>Shipping</span>
                <span>${summary.shipping > 0 ? formatPrice(summary.shipping) : 'Free'}</span>
            </div>
            ${discountPercent > 0 ? `<div class="summary-row discount">
                <span>Discount (${discountPercent}%)</span>
                <span>-${formatPrice(summary.discount)}</span>
            </div>` : ''}
            <div class="summary-row total">
                <span>Total</span>
                <span>${formatPrice(summary.total)}</span>
            </div>
        `;
    }
}
window.renderCheckoutSummary = renderCheckoutSummary;

/**
 * Place order
 * @param {Event} e - Form submit event
 */
function placeOrder(e) {
    e.preventDefault();

    const cart = getCart();
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }

    // Validate form
    const form = e.target;
    const requiredFields = form.querySelectorAll('[required]');
    let valid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            valid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });

    if (!valid) {
        showToast('Please fill in all required fields', 'warning');
        return;
    }

    // Generate order number
    const orderNumber = 'HB' + Date.now().toString().slice(-8);

    // Get payment method from form
    const paymentMethod = form.querySelector('input[name="payment"]:checked')?.value || 'cod';

    // Apply discount + free-shipping (same as cart/checkout pages)
    const discountPercent = parseInt(localStorage.getItem('cartDiscount') || '0');
    const cartTotal = getCartTotal();
    const shipping = cartTotal >= 2000 ? 0 : 60;
    const orderTotal = getCartSummary(discountPercent, shipping).total;

    // Save order to localStorage (for demo)
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push({
        orderNumber,
        items: cart,
        total: orderTotal,
        paymentMethod,
        date: new Date().toISOString(),
        status: 'pending'
    });
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear cart and discount
    clearCart();
    localStorage.removeItem('cartDiscount');

    // Redirect to confirmation page
    window.location.href = `order-confirmation.html?order=${orderNumber}`;
}
window.placeOrder = placeOrder;

// ============================================
// INITIALIZE CART PAGES
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart page
    if (document.querySelector('.cart-page')) {
        renderCartPage();
    }

    // Initialize wishlist page
    if (document.querySelector('.wishlist-page')) {
        renderWishlistPage();
    }

    // Initialize checkout page
    if (document.querySelector('.checkout-page')) {
        renderCheckoutSummary();

        // Attach place order handler
        const checkoutForm = document.querySelector('.checkout-form');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', placeOrder);
        }
    }
});
