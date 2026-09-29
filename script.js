const menuItems = [
  { id: 'demo-1', name: "Chef’s Grilled Selection", description: 'A composed plate with seasonal accompaniments.', category: 'Mains', price: 17500, image: './src/assets/so-dining-main.jpg', available: true },
  { id: 'demo-2', name: 'Signature Rice Plate', description: 'A rich, aromatic rice dish served with a chef-selected protein.', category: 'Rice', price: 14500, image: './src/assets/so-menu-spread.jpg', available: true },
  { id: 'demo-3', name: 'Flame-Grilled Chicken', description: 'Charred, tender chicken with a vibrant house accompaniment.', category: 'Chicken', price: 16500, image: './src/assets/so-chicken.jpg', available: true },
  { id: 'demo-4', name: 'Seasonal Starter', description: 'A light opening plate prepared with market-fresh ingredients.', category: 'Starters', price: 8500, image: './src/assets/so-starter.jpg', available: true },
  { id: 'demo-5', name: 'House Cocktail', description: 'A balanced, elegant pour created for slow evenings.', category: 'Drinks', price: 7500, image: './src/assets/so-cocktail.jpg', available: true },
  { id: 'demo-6', name: 'Dessert of the Moment', description: 'A refined sweet finish, selected by the kitchen.', category: 'Desserts', price: 7000, image: './src/assets/so-dessert.jpg', available: false },
  { id: 'demo-7', name: 'Citrus Soup', description: 'A bright, warming soup with layered aromatics.', category: 'Soups', price: 9000, image: './src/assets/so-menu-spread.jpg', available: true },
  { id: 'demo-8', name: 'Lagos Citrus Spritz', description: 'Crisp, aromatic and effortlessly refreshing.', category: 'Drinks', price: 6500, image: './src/assets/so-cocktail.jpg', available: true },
  { id: 'demo-9', name: 'Signature Mains Duo', description: 'A shareable kitchen favourite for two.', category: 'Mains', price: 32000, image: './src/assets/so-dining-main.jpg', available: true }
];

const menuCategories = ['All', 'Starters', 'Mains', 'Rice', 'Chicken', 'Soups', 'Drinks', 'Desserts'];

const state = {
  category: 'All',
  cart: [],
  orderType: 'Pickup'
};

const menuGrid = document.getElementById('menu-grid');
const categoryContainer = document.getElementById('menu-filters');
const cartCount = document.querySelectorAll('.cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const emptyCart = document.getElementById('empty-cart');
const cartItems = document.getElementById('cart-items');
const drawerFooter = document.getElementById('drawer-footer');
const subtotalValue = document.getElementById('subtotal-value');
const checkoutSummary = document.getElementById('checkout-summary');
const checkoutTotal = document.getElementById('checkout-total');
const checkoutModal = document.getElementById('checkout-modal');
const reservationModal = document.getElementById('reservation-modal');
const checkoutError = document.getElementById('checkout-error');
const reservationError = document.getElementById('reservation-error');

function formatPrice(value) {
  if (value === null || value === undefined) return 'Price to be confirmed';
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(value);
}

function getCartCount() {
  return state.cart.reduce((total, line) => total + line.quantity, 0);
}

function getCartSubtotal() {
  return state.cart.reduce((total, line) => total + ((line.item.price ?? 0) * line.quantity), 0);
}

function getCartHasUnconfirmedPrice() {
  return state.cart.some((line) => line.item.price === null);
}

function renderFilters() {
  categoryContainer.innerHTML = menuCategories.map((category) => `
    <button type="button" class="filter-button ${state.category === category ? 'active' : ''}" data-filter="${category}">${category}</button>
  `).join('');
}

function renderMenuGrid() {
  const visibleItems = state.category === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === state.category);

  menuGrid.innerHTML = visibleItems.length
    ? visibleItems.map(createMenuCardMarkup).join('')
    : '<p class="empty-state">Nothing in this category just yet — please check back soon.</p>';
}

function createMenuCardMarkup(item) {
  return `
    <article class="menu-item" tabindex="0">
      <img src="${item.image}" alt="${item.name}" />
      <div class="menu-body">
        <div class="menu-topline">
          <span class="menu-category">${item.category}</span>
          <span class="menu-price">${formatPrice(item.price)}</span>
        </div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <button type="button" class="secondary-button" data-add-item="${item.id}" ${item.available ? '' : 'disabled'}>
          ${item.available ? 'Add to order' : 'Currently unavailable'}
        </button>
      </div>
    </article>
  `;
}

function updateCartBadge() {
  const count = getCartCount();
  cartCount.forEach((counter) => {
    counter.textContent = String(count);
    counter.classList.toggle('visible', count > 0);
  });
}

function updateCartDrawer() {
  const count = getCartCount();
  if (!count) {
    emptyCart.classList.remove('hidden');
    cartItems.innerHTML = '';
    drawerFooter.classList.add('hidden');
  } else {
    emptyCart.classList.add('hidden');
    drawerFooter.classList.remove('hidden');
    cartItems.innerHTML = state.cart.map(({ item, quantity }) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="item-price">${formatPrice(item.price)}</div>
          <div class="quantity-row">
            <button type="button" class="quantity-button" data-change-quantity="${item.id}|-1" aria-label="Decrease ${item.name}">−</button>
            <span class="quantity-value">${quantity}</span>
            <button type="button" class="quantity-button" data-change-quantity="${item.id}|1" aria-label="Increase ${item.name}">+</button>
            <button type="button" class="remove-button" data-remove-item="${item.id}" aria-label="Remove ${item.name}">Remove</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  const subtotal = getCartSubtotal();
  const hasUnconfirmedPrice = getCartHasUnconfirmedPrice();
  subtotalValue.textContent = formatPrice(hasUnconfirmedPrice ? null : subtotal);
}

function updateCheckoutSummary() {
  if (!state.cart.length) {
    checkoutSummary.innerHTML = '<div class="summary-list"><div class="summary-item"><span>Cart is empty</span></div></div>';
    checkoutTotal.textContent = 'Price to be confirmed';
    return;
  }

  const subtotal = getCartSubtotal();
  const hasUnconfirmedPrice = getCartHasUnconfirmedPrice();
  checkoutSummary.innerHTML = `
    <div class="summary-list">
      ${state.cart.map(({ item, quantity }) => `
        <div class="summary-item">
          <span>${quantity} × ${item.name}</span>
          <span>${formatPrice(item.price === null ? null : item.price * quantity)}</span>
        </div>
      `).join('')}
    </div>
  `;
  checkoutTotal.textContent = formatPrice(hasUnconfirmedPrice ? null : subtotal);
}

function openDrawer() {
  cartDrawer.classList.add('open');
  cartDrawer.setAttribute('aria-hidden', 'false');
}

function closeDrawer() {
  cartDrawer.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
  if (cartDrawer.contains(document.activeElement)) {
    document.activeElement.blur();
  }
}

function openModal(modal) {
  modal.classList.remove('hidden');
}

function closeModal(modal) {
  modal.classList.add('hidden');
  if (modal.contains(document.activeElement)) {
    document.activeElement.blur();
  }
}

function addItemToCart(itemId) {
  const item = menuItems.find((entry) => entry.id === itemId);
  if (!item || !item.available) return;

  const current = state.cart.find((line) => line.id === itemId);
  if (current) {
    current.quantity += 1;
  } else {
    state.cart.push({ id: itemId, item, quantity: 1 });
  }

  updateCartBadge();
  updateCartDrawer();
  updateCheckoutSummary();
}

function changeCartQuantity(itemId, delta) {
  const index = state.cart.findIndex((line) => line.id === itemId);
  if (index === -1) return;

  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }

  updateCartBadge();
  updateCartDrawer();
  updateCheckoutSummary();
}

function removeCartItem(itemId) {
  state.cart = state.cart.filter((line) => line.id !== itemId);
  updateCartBadge();
  updateCartDrawer();
  updateCheckoutSummary();
}

function clearCart() {
  state.cart = [];
  updateCartBadge();
  updateCartDrawer();
  updateCheckoutSummary();
}

function setOrderType(type) {
  state.orderType = type;
  const options = document.querySelectorAll('.toggle-option');
  options.forEach((option) => {
    const active = option.dataset.orderType === type;
    option.classList.toggle('active', active);
  });

  const addressField = document.querySelector('.delivery-field');
  const addressInput = document.querySelector('input[name="address"]');
  if (type === 'Delivery') {
    addressField.classList.remove('hidden');
    addressInput.required = true;
  } else {
    addressField.classList.add('hidden');
    addressInput.required = false;
  }
}

function handleCheckoutSubmit(event) {
  event.preventDefault();
  checkoutError.textContent = '';

  if (!state.cart.length) {
    checkoutError.textContent = 'Please add at least one item to your order.';
    return;
  }

  const formData = new FormData(event.currentTarget);
  const name = String(formData.get('name') || '').trim();
  const phone = String(formData.get('phone') || '').trim();
  const address = String(formData.get('address') || '').trim();
  const notes = String(formData.get('notes') || '').trim();

  if (!name || !phone || (state.orderType === 'Delivery' && !address)) {
    checkoutError.textContent = 'Please complete all required fields.';
    return;
  }

  const lines = state.cart
    .map(({ item, quantity }) => `${quantity} × ${item.name} — ${formatPrice(item.price)}`)
    .join('\n');

  const subtotalText = getCartHasUnconfirmedPrice() ? 'Price to be confirmed' : formatPrice(getCartSubtotal());

  const message = `Hello SO Restaurant & Lounge,\n\nI would like to place an order.\n\nOrder Type: ${state.orderType}\n\nItems:\n${lines}\n\nSample menu subtotal: ${subtotalText}\nDelivery Fee: ${state.orderType === 'Delivery' ? 'To be confirmed by the restaurant' : 'Not applicable'}\n\nName: ${name}\nPhone: ${phone}\n\nDelivery Address:\n${address || 'Not applicable'}\n\nNotes:\n${notes || 'None'}\n\nThese menu prices are samples only. Please confirm current prices, availability, delivery fee and final total.`;

  window.open(`https://wa.me/2348162900017?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}

function handleReservationSubmit(event, channel = 'whatsapp') {
  event.preventDefault();
  reservationError.textContent = '';

  const formData = new FormData(event.currentTarget);
  const values = Object.fromEntries(formData.entries());

  const missing = !values.name || !values.phone || !values.email || !values.guests || !values.date || !values.time;
  if (missing) {
    reservationError.textContent = 'Please complete all required fields.';
    return;
  }

  const message = `Hello SO Restaurant & Lounge,\n\nI would like to request a table reservation.\n\nName: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\nGuests: ${values.guests}\nDate: ${values.date}\nTime: ${values.time}\n\nSpecial Request:\n${values.request || 'None'}\n\nPlease confirm availability.`;

  if (channel === 'email') {
    window.location.href = `mailto:reservations@so-restaurant.com?subject=${encodeURIComponent('Table Reservation Request')}&body=${encodeURIComponent(message)}`;
    return;
  }

  window.open(`https://wa.me/2348162900017?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}

function registerEvents() {
  document.addEventListener('click', (event) => {
    const filterButton = event.target.closest('[data-filter]');
    if (filterButton) {
      state.category = filterButton.dataset.filter;
      renderFilters();
      renderMenuGrid();
      return;
    }

    const addButton = event.target.closest('[data-add-item]');
    if (addButton) {
      addItemToCart(addButton.dataset.addItem);
      openDrawer();
      return;
    }

    const changeButton = event.target.closest('[data-change-quantity]');
    if (changeButton) {
      const [itemId, deltaValue] = changeButton.dataset.changeQuantity.split('|');
      changeCartQuantity(itemId, Number(deltaValue));
      return;
    }

    const removeButton = event.target.closest('[data-remove-item]');
    if (removeButton) {
      removeCartItem(removeButton.dataset.removeItem);
      return;
    }

    const cartTrigger = event.target.closest('.order-trigger, .cart-trigger');
    if (cartTrigger) {
      openDrawer();
      return;
    }

    const reserveTrigger = event.target.closest('.reserve-trigger');
    if (reserveTrigger) {
      openModal(reservationModal);
      return;
    }

    const closeCart = event.target.closest('.cart-close');
    if (closeCart) {
      closeDrawer();
      return;
    }

    const closeCheckout = event.target.closest('.close-checkout');
    if (closeCheckout) {
      closeModal(checkoutModal);
      return;
    }

    const closeReservation = event.target.closest('.close-reservation');
    if (closeReservation) {
      closeModal(reservationModal);
      return;
    }

    const continueOrder = event.target.closest('#continue-order');
    if (continueOrder) {
      closeDrawer();
      openModal(checkoutModal);
      updateCheckoutSummary();
      return;
    }

    const clearCartButton = event.target.closest('#clear-cart');
    if (clearCartButton) {
      clearCart();
      return;
    }

    const toggleType = event.target.closest('.toggle-option');
    if (toggleType) {
      setOrderType(toggleType.dataset.orderType);
      return;
    }

    if (event.target.matches('.drawer')) {
      closeDrawer();
    }

    if (event.target.matches('.modal-overlay')) {
      closeModal(checkoutModal);
      closeModal(reservationModal);
    }

    if (event.target.closest('.menu-toggle')) {
      const toggle = event.target.closest('.menu-toggle');
      const nav = document.querySelector('.mobile-nav');
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open', !expanded);
    }
  });

  document.querySelectorAll('.whatsapp-button').forEach((button) => {
    button.addEventListener('click', () => {
      window.open('https://wa.me/2348162900017?text=Hello%20SO%20Restaurant%20%26%20Lounge%2C%20I%E2%80%99d%20like%20to%20make%20an%20enquiry.', '_blank', 'noopener,noreferrer');
    });
  });

  document.getElementById('checkout-form').addEventListener('submit', handleCheckoutSubmit);
  document.getElementById('reservation-form').addEventListener('submit', (event) => handleReservationSubmit(event, 'whatsapp'));
  document.getElementById('send-email-reservation').addEventListener('click', (event) => {
    const form = document.getElementById('reservation-form');
    handleReservationSubmit({ preventDefault() {}, currentTarget: form }, 'email');
  });

  document.querySelectorAll('.main-nav a, .mobile-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelector('.mobile-nav')?.classList.remove('open');
      document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('scroll', () => {
    document.querySelector('.site-header').classList.toggle('scrolled', window.scrollY > 20);
  });

  document.getElementById('year').textContent = new Date().getFullYear();
}

function init() {
  renderFilters();
  renderMenuGrid();
  updateCartBadge();
  updateCartDrawer();
  updateCheckoutSummary();
  setOrderType('Pickup');
  registerEvents();
}

init();
