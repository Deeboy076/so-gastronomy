const restaurantConfig = {
  name: "Soul Food Restaurant",
  phone: "+2347041585082",
  whatsapp: "2347041585082",
  email: "[REPLACE WITH VERIFIED EMAIL]",
  address: "51 St Finbarr's College Rd, Yaba, Lagos 100213, Nigeria",
  openingHours: {
    monday: "11:00 AM – 10:00 PM",
    tuesday: "11:00 AM – 10:00 PM",
    wednesday: "11:00 AM – 10:00 PM",
    thursday: "11:00 AM – 10:00 PM",
    friday: "11:00 AM – 11:00 PM",
    saturday: "11:00 AM – 11:00 PM",
    sunday: "12:00 PM – 9:00 PM"
  }
};

const restaurantData = {
  name: "Soul Food",
  phone: restaurantConfig.phone,
  whatsapp: restaurantConfig.whatsapp,
  address: restaurantConfig.address,
  menu: [
    { name: "Popcorn Chicken", category: "starters", description: "Crispy bites with a golden crunch and a bold savoury finish.", price: "₦5,500", image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=80" },
    { name: "Fries", category: "starters", description: "Golden, crisp potato fries made for sharing and snacking.", price: "₦2,000", image: "images/fries.jpg" },
    { name: "Caesar Salad", category: "starters", description: "Fresh greens, crisp toppings and a creamy house dressing.", price: "₦6,999", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80" },
    { name: "Spring Rolls", category: "starters", description: "Crisp rolls with a savoury filling and a light satisfying crunch.", price: "₦4,500", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80" },
    { name: "Yam Nachos", category: "starters", description: "A playful, hearty starter with warm seasoning and a crisp finish.", price: "₦3,500", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80" },
    { name: "Gizdodo", category: "starters", description: "A crowd-pleasing mix of fried plantain and peppered chicken bites.", price: "₦6,500", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80" },
    { name: "Special Fried Rice", category: "rice", description: "A flavour-packed fried rice made for sharing and satisfying big appetites.", price: "₦10,500", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80" },
    { name: "Jollof Iya Daisy", category: "rice", description: "Rich, aromatic rice with the warm, comforting taste of a classic favourite.", price: "₦9,999", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80" },
    { name: "Coconut Rice & Fish in Canoe", category: "rice", description: "A comforting rice-and-fish combo with a distinctive coastal flavour profile.", price: "₦18,000", image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Coconut_rice_with_boiled_fish.jpg" },
    { name: "Triple Meat Pasta", category: "pasta", description: "A rich, comforting bowl of pasta with a generous meat mix and savoury sauce.", price: "₦14,500", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80" },
    { name: "Spicy Bolognese", category: "pasta", description: "Classic comfort with a little extra heat and a deeply savoury finish.", price: "₦11,500", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=900&q=80" },
    { name: "Prawn Pasta", category: "pasta", description: "Silky pasta with juicy prawns and a balanced, slightly smoky sauce.", price: "₦15,000", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80" },
    { name: "Penne Arrabiata with Shredded Chicken", category: "pasta", description: "A spiced, comforting pasta with tender chicken and a lively red sauce.", price: "₦9,999", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=900&q=80" },
    { name: "Classic Burger", category: "burgers", description: "A satisfying burger done simply with familiar comfort-lunch energy.", price: "₦9,500", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80" },
    { name: "Soul Food Burger", category: "burgers", description: "A loaded burger built for bigger appetites and great company.", price: "₦12,500", image: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80" },
    { name: "Spicy Barbecue Wings & Fries", category: "fried", description: "A bold smoky wing combo designed for sharing and snacking with friends.", price: "₦12,000", image: "images/instagram-soulfood-5.jpg" },
    { name: "Sweet Child Wings & Fries", category: "fried", description: "Sweet, smoky and slightly sticky wings with a crisp side of fries.", price: "₦11,500", image: "images/instagram-soulfood-5.jpg" },
    { name: "Battered Fried Chicken Wings & Fries", category: "fried", description: "Crisp, juicy wings finished in a golden batter and served with fries.", price: "₦11,000", image: "images/instagram-soulfood-5.jpg" },
    { name: "Fresh Press", category: "drinks", description: "A chilled, refreshing drink made for a quick reset between bites.", price: "₦3,500", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80" },
    { name: "Liquid Lush", category: "drinks", description: "A bright fruit blend with smooth flavour and easy-drinking energy.", price: "₦4,500", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80" },
    { name: "Fruit Punch", category: "drinks", description: "A colourful fruit-based sip with a refreshing, vibrant finish.", price: "₦3,500", image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80" },
    { name: "Milkshakes", category: "drinks", description: "Thick, creamy and satisfying with plenty of comforting flavour.", price: "₦5,000", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80" },
    { name: "Mocktails", category: "drinks", description: "Fresh zero-alcohol drinks that still feel celebratory and lively.", price: "₦6,000", image: "https://images.unsplash.com/photo-1460306855393-0410f61241c7?auto=format&fit=crop&w=900&q=80" },
    { name: "African Platter", category: "african", description: "A satisfying mix of hearty African favourites for the table.", price: "₦25,000", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80" },
    { name: "Grilled Chicken & Plantain", category: "protein", description: "A filling protein plate with a balance of grilled flavour and warm comfort.", price: "₦13,500", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80" },
    { name: "Fish & Chips", category: "protein", description: "A familiar comfort classic with a crisp finish and balanced seasoning.", price: "₦12,000", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80" },
    { name: "Breakfast Bowl", category: "breakfast", description: "A satisfying breakfast plate for a slower, warmer start to the day.", price: "₦8,500", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80" },
    { name: "Shakshuka Plate", category: "breakfast", description: "A warm breakfast option with eggs and bold comforting flavour.", price: "₦9,500", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80" }
  ],
  signature: [
    { name: "Triple Meat Pasta", description: "A hearty pasta loaded with rich sauce and generous protein for comforting indulgence.", price: "₦14,500", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80", badge: "House Favourite" },
    { name: "Special Fried Rice", description: "Big flavour, satisfying texture and a familiar crowd-pleaser for lunch or dinner.", price: "₦10,500", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80", badge: "Popular" },
    { name: "Jollof Iya Daisy", description: "A beloved rice classic with layered flavour, warmth and a rich finishing taste.", price: "₦9,999", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80", badge: "Popular" },
    { name: "Prawn Pasta", description: "Silky, savoury and rich with flavour, designed for a memorable meal.", price: "₦15,000", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80", badge: "Popular" },
    { name: "Yam Nachos", description: "Crisp, warm and satisfying with a perfect balance of bite and comfort.", price: "₦1,950", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80", badge: "Favourite" },
    { name: "Soul Food Burger", description: "Bigger flavour, a satisfying bite and just the right amount of comfort-food energy.", price: "₦12,500", image: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80", badge: "Popular" }
  ],
  gallery: [
    { title: "Wings & fries", image: "images/instagram-soulfood-5.jpg" },
    { title: "Interior", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80" },
    { title: "Drinks", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80" },
    { title: "Guests together", image: "images/instagram-soulfood-3.jpg" },
    { title: "Atmosphere", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80" },
    { title: "Table vibe", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80" },
    { title: "Asun jollof", image: "images/asun-jollof.jpg" },
    { title: "Late-night moments", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80" }
  ]
};

const featuredNames = [
  "Special Fried Rice",
  "Jollof Iya Daisy",
  "Triple Meat Pasta",
  "Prawn Pasta",
  "Yam Nachos",
  "Soul Food Burger"
];

const foodGrid = document.querySelector("#foodGrid");
const signatureGrid = document.querySelector("#signatureGrid");
const galleryGrid = document.querySelector("#galleryGrid");
const year = document.querySelector("#year");
const nav = document.querySelector("#nav");
const menuToggle = document.querySelector(".menu-toggle");
const header = document.querySelector(".site-header");
const pageContext = document.body.dataset.page || "home";

const analyticsEvents = {
  track(eventName, payload = {}) {
    if (typeof window !== "undefined") {
      window.__soulFoodAnalytics = window.__soulFoodAnalytics || [];
      window.__soulFoodAnalytics.push({ eventName, payload, timestamp: new Date().toISOString() });
    }
  }
};

function renderMenu(category = "all", featuredOnly = pageContext === "home") {
  if (!foodGrid) return;

  let items = restaurantData.menu.filter((item) => {
    if (category === "all") return true;
    return item.category === category;
  });

  if (featuredOnly) {
    items = items.filter((item) => featuredNames.includes(item.name)).slice(0, 6);
  }

  foodGrid.innerHTML = items
    .map((item) => {
      const price = `<span class="price">${item.price}</span>`;
      return `
        <article class="food-card" data-category="${item.category}">
          <div class="food-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async" width="640" height="480" />
          </div>
          <div class="food-info">
            <div class="food-meta">
              <small>${item.category}</small>
              ${price}
            </div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <button class="food-order" type="button" data-order-now="${item.name}" aria-label="Add ${item.name} to cart">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L21 8H6" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg>
              <span aria-live="polite">ADD TO CART</span>
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderSignature() {
  if (!signatureGrid) return;

  signatureGrid.innerHTML = restaurantData.signature
    .map(
      (item) => `
        <article class="signature-item">
          <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async" width="700" height="700" />
          <div class="signature-copy">
            <span class="badge">${item.badge}</span>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span class="signature-price">${item.price}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderGallery() {
  if (!galleryGrid) return;

  galleryGrid.innerHTML = restaurantData.gallery
    .map(
      (item) => `
        <button type="button" class="gallery-item" data-image="${item.image}" data-caption="${item.title}" aria-label="View ${item.title} gallery image">
          <img src="${item.image}" alt="${item.title} at Soul Food Restaurant" loading="lazy" decoding="async" width="600" height="600" />
          <span>${item.title}</span>
        </button>
      `
    )
    .join("");
}

function setupCart() {
  if (!foodGrid) return;

  const cartKey = "soul-food-cart";
  const cart = new Map();
  const findItem = (name) => restaurantData.menu.find((item) => item.name === name);

  try {
    const savedCart = JSON.parse(localStorage.getItem(cartKey) || "[]");
    if (Array.isArray(savedCart)) {
      savedCart.forEach(({ name, quantity }) => {
        if (findItem(name) && Number.isInteger(quantity) && quantity > 0) cart.set(name, quantity);
      });
    }
  } catch {
    localStorage.removeItem(cartKey);
  }

  const launch = document.createElement("button");
  launch.className = "cart-launch";
  launch.type = "button";
  launch.setAttribute("aria-haspopup", "dialog");
  launch.setAttribute("aria-controls", "cartDialog");
  launch.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L21 8H6" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg>
    <span>Order tray</span><span class="cart-count" aria-label="0 items">0</span>
  `;
  foodGrid.parentNode.insertBefore(launch, foodGrid);

  const dialog = document.createElement("dialog");
  dialog.className = "cart-dialog";
  dialog.id = "cartDialog";
  dialog.setAttribute("aria-labelledby", "cartHeading");
  dialog.innerHTML = `
    <div class="cart-panel">
      <header class="cart-header">
        <div><p class="eyebrow">YOUR SELECTION</p><h2 id="cartHeading">Your order tray</h2></div>
        <button class="cart-close" type="button" aria-label="Close cart">×</button>
      </header>
      <p class="cart-status" aria-live="polite"></p>
      <div class="cart-items"></div>
      <div class="cart-empty">Your tray is empty. Add your favourites and place your order.</div>
      <footer class="cart-footer">
        <div class="cart-total"><span>Subtotal</span><strong>₦0</strong></div>
        <p>Final availability and prices are confirmed when you order.</p>
        <button class="btn btn-primary cart-checkout" type="button" disabled>PROCEED TO ORDER <span aria-hidden="true">↗</span></button>
      </footer>
    </div>
  `;
  document.body.appendChild(dialog);

  const count = launch.querySelector(".cart-count");
  const mobileCartCount = document.querySelector(".mobile-cart-count");
  const mobileCartTrigger = document.querySelector(".cart-trigger");
  const itemsContainer = dialog.querySelector(".cart-items");
  const emptyMessage = dialog.querySelector(".cart-empty");
  const subtotal = dialog.querySelector(".cart-total strong");
  const checkout = dialog.querySelector(".cart-checkout");
  const status = dialog.querySelector(".cart-status");

  const checkoutDialog = document.createElement("dialog");
  checkoutDialog.className = "checkout-dialog";
  checkoutDialog.id = "checkoutDialog";
  checkoutDialog.innerHTML = `
    <div class="checkout-panel">
      <header class="checkout-header">
        <div><p class="eyebrow">PLACE ORDER</p><h2>Order details</h2></div>
        <button class="cart-close" type="button" aria-label="Close order details">×</button>
      </header>

      <form class="checkout-form" id="checkoutForm">
        <div class="form-row">
          <label for="orderName">Full Name</label>
          <input id="orderName" name="name" type="text" placeholder="Your full name" required />
        </div>

        <div class="form-row">
          <label for="orderPhone">Phone Number</label>
          <input id="orderPhone" name="phone" type="tel" placeholder="e.g. +234 803 000 0000" required />
        </div>

        <div class="form-row">
          <label for="orderType">Order Type</label>
          <select id="orderType" name="orderType">
            <option value="pickup">Pickup</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>

        <div class="form-row" id="deliveryAddressWrap" style="display:none;">
          <label for="deliveryAddress">Delivery Address</label>
          <textarea id="deliveryAddress" name="address" placeholder="Street, area, and landmark"></textarea>
        </div>

        <div class="form-row">
          <label for="orderNote">Additional Order Notes</label>
          <textarea id="orderNote" name="note" placeholder="Please make the chicken extra spicy."></textarea>
        </div>

        <div class="order-summary-box">
          <h3>Order summary</h3>
          <ul id="checkoutSummary"></ul>
        </div>

        <div class="checkout-actions">
          <button class="btn btn-primary" type="submit">PROCEED TO CONFIRM</button>
          <div id="checkoutMessage" class="checkout-message" aria-live="polite"></div>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(checkoutDialog);

  const reviewDialog = document.createElement("dialog");
  reviewDialog.className = "review-dialog";
  reviewDialog.id = "reviewDialog";
  reviewDialog.innerHTML = `
    <div class="checkout-panel">
      <header class="checkout-header">
        <div><p class="eyebrow">CONFIRM</p><h2>Confirm your order</h2></div>
        <button class="cart-close" type="button" aria-label="Close review">×</button>
      </header>

      <div class="order-review-content" id="orderReviewContent"></div>
      <div class="checkout-actions">
        <button type="button" class="btn btn-primary" id="orderWhatsApp">CONFIRM ORDER VIA WHATSAPP</button>
        <button type="button" class="btn btn-outline" id="orderEmail">SEND ORDER BY EMAIL</button>
      </div>
    </div>
  `;
  document.body.appendChild(reviewDialog);

  const checkoutForm = checkoutDialog.querySelector("#checkoutForm");
  const checkoutSummary = checkoutDialog.querySelector("#checkoutSummary");
  const checkoutMessage = checkoutDialog.querySelector("#checkoutMessage");
  const orderTypeSelect = checkoutDialog.querySelector("#orderType");
  const addressWrap = checkoutDialog.querySelector("#deliveryAddressWrap");
  const deliveryAddress = checkoutDialog.querySelector("#deliveryAddress");
  const orderReviewContent = reviewDialog.querySelector("#orderReviewContent");
  const orderWhatsApp = reviewDialog.querySelector("#orderWhatsApp");
  const orderEmail = reviewDialog.querySelector("#orderEmail");

  const getOrderEntries = () => [...cart].map(([name, quantity]) => ({ item: findItem(name), quantity }));

  const getOrderDetails = () => {
    const entries = getOrderEntries();
    const total = entries.reduce((sum, { item, quantity }) => sum + amount(item.price) * quantity, 0);
    return { entries, total };
  };

  const updateCheckoutSummary = () => {
    const { entries, total } = getOrderDetails();
    const summary = entries.map(({ item, quantity }) => `${quantity} × ${item.name} — ${formatPrice(amount(item.price) * quantity)}`);
    checkoutSummary.innerHTML = summary.map((line) => `<li>${line}</li>`).join("") + `<li><strong>Total: ${formatPrice(total)}</strong></li>`;
    const isDelivery = orderTypeSelect.value === "delivery";
    addressWrap.style.display = isDelivery ? "block" : "none";
    if (!isDelivery) {
      deliveryAddress.value = "";
    }
  };

  const orderDraft = () => {
    const formData = new FormData(checkoutForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const orderType = String(formData.get("orderType") || "pickup");
    const address = String(formData.get("address") || "").trim();
    const note = String(formData.get("note") || "").trim();
    const { entries, total } = getOrderDetails();

    return { name, phone, orderType, address, note, entries, total };
  };

  const buildWhatsAppOrderMessage = (draft) => {
    const lines = [
      "Hello Soul Food 👋",
      "",
      "I'd like to place an order.",
      "",
      "ORDER DETAILS",
      "━━━━━━━━━━━━━━",
      ...draft.entries.map(({ item, quantity }) => `• ${item.name} × ${quantity} — ${formatPrice(amount(item.price) * quantity)}`),
      "",
      `Subtotal: ${formatPrice(draft.total)}`,
      "",
      "CUSTOMER DETAILS",
      "━━━━━━━━━━━━━━",
      `Name: ${draft.name}`,
      `Phone: ${draft.phone}`,
      `Order Type: ${draft.orderType === "delivery" ? "Delivery" : "Pickup"}`,
      draft.orderType === "delivery" ? `Address:\n${draft.address}` : "",
      draft.note ? `Notes: ${draft.note}` : "",
      "",
      "Please confirm my order.",
      "",
      "Thank you."
    ].filter(Boolean);
    return lines.join("\n");
  };

  const buildEmailOrderBody = (draft) => {
    const lines = [
      "Hello Soul Food,",
      "",
      "I'd like to place an order.",
      "",
      "ORDER DETAILS",
      ...draft.entries.map(({ item, quantity }) => `${item.name} × ${quantity} — ${formatPrice(amount(item.price) * quantity)}`),
      "",
      `Subtotal: ${formatPrice(draft.total)}`,
      "",
      "CUSTOMER DETAILS",
      `Name: ${draft.name}`,
      `Phone: ${draft.phone}`,
      `Order Type: ${draft.orderType === "delivery" ? "Delivery" : "Pickup"}`,
      draft.orderType === "delivery" ? `Address:\n${draft.address}` : "",
      draft.note ? `Notes: ${draft.note}` : "",
      "",
      "Please confirm the order.",
      "",
      "Thank you."
    ].filter(Boolean);
    return lines.join("\n");
  };

  const showOrderSuccess = () => {
    const successDialog = document.createElement("dialog");
    successDialog.className = "success-dialog";
    successDialog.innerHTML = `
      <div class="checkout-panel">
        <header class="checkout-header">
          <div><p class="eyebrow">ORDER REQUEST</p><h2>Order request ready</h2></div>
        </header>

        <p class="success-copy">Your order request is ready. Please send the prepared message in WhatsApp or email; Soul Food will confirm availability and next steps.</p>
        <div class="checkout-actions">
          <button type="button" class="btn btn-primary" data-success-menu>RETURN TO MENU</button>
          <button type="button" class="btn btn-outline" data-success-home>BACK HOME</button>
        </div>
      </div>
    `;
    document.body.appendChild(successDialog);
    const menuButton = successDialog.querySelector("[data-success-menu]");
    const homeButton = successDialog.querySelector("[data-success-home]");
    menuButton.addEventListener("click", () => {
      successDialog.close();
      window.location.href = "menu.html";
    });
    homeButton.addEventListener("click", () => {
      successDialog.close();
      window.location.href = "index.html";
    });
    successDialog.showModal();
  };

  orderTypeSelect.addEventListener("change", updateCheckoutSummary);
  checkoutDialog.querySelector(".cart-close").addEventListener("click", () => { checkoutDialog.close(); checkoutMessage.textContent = ""; checkoutMessage.classList.remove("error"); });
  reviewDialog.querySelector(".cart-close").addEventListener("click", () => { reviewDialog.close(); });
  checkoutDialog.addEventListener("click", (event) => { if (event.target === checkoutDialog) checkoutDialog.close(); });
  reviewDialog.addEventListener("click", (event) => { if (event.target === reviewDialog) reviewDialog.close(); });

  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(checkoutForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const orderType = String(formData.get("orderType") || "pickup");
    const address = String(formData.get("address") || "").trim();
    const note = String(formData.get("note") || "").trim();

    if (!name || !phone) {
      checkoutMessage.textContent = "Please add your name and phone number.";
      checkoutMessage.classList.add("error");
      return;
    }

    if (!/^\+?[0-9\s()-]{8,20}$/.test(phone)) {
      checkoutMessage.textContent = "Please enter a valid phone number.";
      checkoutMessage.classList.add("error");
      return;
    }

    if (orderType === "delivery" && !address) {
      checkoutMessage.textContent = "Please add a delivery address.";
      checkoutMessage.classList.add("error");
      return;
    }

    const draft = orderDraft();
    orderReviewContent.innerHTML = `
      <div class="review-grid">
        <div><strong>Customer:</strong> ${draft.name}</div>
        <div><strong>Phone:</strong> ${draft.phone}</div>
        <div><strong>Order:</strong> ${draft.entries.map(({ item, quantity }) => `${quantity} × ${item.name}`).join(", ")}</div>
        <div><strong>Order type:</strong> ${draft.orderType === "delivery" ? "Delivery" : "Pickup"}</div>
        ${draft.orderType === "delivery" ? `<div><strong>Address:</strong> ${draft.address}</div>` : ""}
        ${draft.note ? `<div><strong>Notes:</strong> ${draft.note}</div>` : ""}
        <div><strong>Total:</strong> ${formatPrice(draft.total)}</div>
      </div>
    `;

    checkoutMessage.textContent = "";
    checkoutMessage.classList.remove("error");
    checkoutDialog.close();
    reviewDialog.showModal();
    analyticsEvents.track("checkout_started", { orderType });
  });

  orderWhatsApp.addEventListener("click", () => {
    const draft = orderDraft();
    const message = buildWhatsAppOrderMessage(draft);
    reviewDialog.close();
    window.open(`https://wa.me/${restaurantConfig.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    clearCart();
    analyticsEvents.track("order_whatsapp_clicked", { total: draft.total });
    showOrderSuccess();
  });

  orderEmail.addEventListener("click", () => {
    const draft = orderDraft();
    const subject = encodeURIComponent(`New Soul Food Order — ${draft.name}`);
    const body = encodeURIComponent(buildEmailOrderBody(draft));
    const mailto = `mailto:${encodeURIComponent(restaurantConfig.email)}?subject=${subject}&body=${body}`;
    reviewDialog.close();
    clearCart();
    window.location.href = mailto;
    analyticsEvents.track("order_email_clicked", { total: draft.total });
    showOrderSuccess();
  });

  const bookingDialog = document.createElement("dialog");
  bookingDialog.className = "booking-dialog";
  bookingDialog.innerHTML = `
    <div class="checkout-panel">
      <header class="checkout-header">
        <div><p class="eyebrow">BOOK A TABLE</p><h2>Booking request</h2></div>
        <button class="cart-close" type="button" aria-label="Close booking form">×</button>
      </header>

      <form class="checkout-form" id="bookingForm">
        <div class="form-row">
          <label for="bookingName">Full Name</label>
          <input id="bookingName" name="name" type="text" placeholder="Your full name" required />
        </div>

        <div class="form-row two-col">
          <div>
            <label for="bookingPhone">Phone Number</label>
            <input id="bookingPhone" name="phone" type="tel" placeholder="e.g. +234 803 000 0000" required />
          </div>
          <div>
            <label for="bookingEmail">Email</label>
            <input id="bookingEmail" name="email" type="email" placeholder="you@example.com" required />
          </div>
        </div>

        <div class="form-row two-col">
          <div>
            <label for="bookingDate">Date</label>
            <input id="bookingDate" name="date" type="date" required />
          </div>
          <div>
            <label for="bookingTime">Preferred Time</label>
            <input id="bookingTime" name="time" type="time" required />
          </div>
        </div>

        <div class="form-row">
          <label for="bookingGuests">Number of Guests</label>
          <input id="bookingGuests" name="guests" type="number" min="1" value="2" required />
        </div>

        <div class="form-row">
          <label for="bookingRequest">Special Request</label>
          <textarea id="bookingRequest" name="request" placeholder="Birthday dinner, window seat, etc."></textarea>
        </div>

        <div class="checkout-actions">
          <button class="btn btn-primary" type="submit">REVIEW BOOKING</button>
          <div id="bookingMessage" class="checkout-message" aria-live="polite"></div>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(bookingDialog);

  const bookingReviewDialog = document.createElement("dialog");
  bookingReviewDialog.className = "review-dialog";
  bookingReviewDialog.innerHTML = `
    <div class="checkout-panel">
      <header class="checkout-header">
        <div><p class="eyebrow">REVIEW</p><h2>Review your booking</h2></div>
        <button class="cart-close" type="button" aria-label="Close booking review">×</button>
      </header>
      <div id="bookingReviewContent" class="order-review-content"></div>
      <div class="checkout-actions">
        <button type="button" class="btn btn-primary" id="bookingWhatsApp">SEND VIA WHATSAPP</button>
        <button type="button" class="btn btn-outline" id="bookingEmail">SEND VIA EMAIL</button>
      </div>
    </div>
  `;
  document.body.appendChild(bookingReviewDialog);

  const bookingForm = bookingDialog.querySelector("#bookingForm");
  const bookingMessage = bookingDialog.querySelector("#bookingMessage");
  const bookingReviewContent = bookingReviewDialog.querySelector("#bookingReviewContent");
  const bookingWhatsApp = bookingReviewDialog.querySelector("#bookingWhatsApp");
  const bookingEmail = bookingReviewDialog.querySelector("#bookingEmail");

  const buildBookingDraft = () => {
    const formData = new FormData(bookingForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const date = String(formData.get("date") || "").trim();
    const time = String(formData.get("time") || "").trim();
    const guests = Number(formData.get("guests") || 1);
    const request = String(formData.get("request") || "").trim();
    return { name, phone, email, date, time, guests, request };
  };

  const formatBookingDate = (value) => {
    if (!value) return "Not selected";
    const date = new Date(`${value}T00:00:00`);
    return new Intl.DateTimeFormat("en-NG", { dateStyle: "long" }).format(date);
  };

  const formatBookingTime = (value) => {
    if (!value) return "Not selected";
    const [hours, minutes] = value.split(":").map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return new Intl.DateTimeFormat("en-NG", { hour: "numeric", minute: "2-digit" }).format(date);
  };

  const buildBookingWhatsAppMessage = (draft) => {
    const lines = [
      "Hello Soul Food 👋",
      "",
      "I'd like to make a table booking request.",
      "",
      "BOOKING DETAILS",
      "━━━━━━━━━━━━━━",
      `Date: ${formatBookingDate(draft.date)}`,
      `Time: ${formatBookingTime(draft.time)}`,
      `Guests: ${draft.guests}`,
      "",
      "CUSTOMER DETAILS",
      "━━━━━━━━━━━━━━",
      `Name: ${draft.name}`,
      `Phone: ${draft.phone}`,
      `Email: ${draft.email}`,
      draft.request ? `Special Request: ${draft.request}` : "",
      "",
      "Please confirm whether the table is available.",
      "",
      "Thank you."
    ].filter(Boolean);
    return lines.join("\n");
  };

  const buildBookingEmailBody = (draft) => {
    const lines = [
      "Hello Soul Food,",
      "",
      "I'd like to request a table booking.",
      "",
      "BOOKING DETAILS",
      `Date: ${formatBookingDate(draft.date)}`,
      `Time: ${formatBookingTime(draft.time)}`,
      `Guests: ${draft.guests}`,
      "",
      "CUSTOMER DETAILS",
      `Name: ${draft.name}`,
      `Phone: ${draft.phone}`,
      `Email: ${draft.email}`,
      draft.request ? `Special Request: ${draft.request}` : "",
      "",
      "Please confirm availability.",
      "",
      "Thank you."
    ].filter(Boolean);
    return lines.join("\n");
  };

  const validateBookingDraft = (draft) => {
    if (!draft.name) return "Please enter your full name.";
    if (!/^\+?[0-9\s()-]{8,20}$/.test(draft.phone)) return "Please enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email)) return "Please enter a valid email.";
    if (!draft.date) return "Please select a booking date.";
    if (!draft.time) return "Please select a preferred time.";
    if (draft.guests < 1) return "Guest count must be at least 1.";

    const selectedDate = new Date(`${draft.date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) return "Please choose a future booking date.";

    return "";
  };

  bookingDialog.querySelector(".cart-close").addEventListener("click", () => bookingDialog.close());
  bookingReviewDialog.querySelector(".cart-close").addEventListener("click", () => bookingReviewDialog.close());
  bookingDialog.addEventListener("click", (event) => { if (event.target === bookingDialog) bookingDialog.close(); });
  bookingReviewDialog.addEventListener("click", (event) => { if (event.target === bookingReviewDialog) bookingReviewDialog.close(); });

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const draft = buildBookingDraft();
    const error = validateBookingDraft(draft);
    if (error) {
      bookingMessage.textContent = error;
      bookingMessage.classList.add("error");
      return;
    }

    bookingMessage.textContent = "";
    bookingMessage.classList.remove("error");
    bookingReviewContent.innerHTML = `
      <div class="review-grid">
        <div><strong>Name:</strong> ${draft.name}</div>
        <div><strong>Date:</strong> ${formatBookingDate(draft.date)}</div>
        <div><strong>Time:</strong> ${formatBookingTime(draft.time)}</div>
        <div><strong>Guests:</strong> ${draft.guests}</div>
        <div><strong>Phone:</strong> ${draft.phone}</div>
        <div><strong>Email:</strong> ${draft.email}</div>
        ${draft.request ? `<div><strong>Special Request:</strong> ${draft.request}</div>` : ""}
      </div>
    `;
    bookingDialog.close();
    bookingReviewDialog.showModal();
    analyticsEvents.track("booking_started", { guests: draft.guests, date: draft.date });
  });

  bookingWhatsApp.addEventListener("click", () => {
    const draft = buildBookingDraft();
    const message = buildBookingWhatsAppMessage(draft);
    bookingReviewDialog.close();
    window.open(`https://wa.me/${restaurantConfig.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    analyticsEvents.track("booking_whatsapp_clicked", { date: draft.date, guests: draft.guests });
    const bookingSuccess = document.createElement("dialog");
    bookingSuccess.className = "success-dialog";
    bookingSuccess.innerHTML = `
      <div class="checkout-panel">
        <header class="checkout-header">
          <div><p class="eyebrow">BOOKING REQUEST</p><h2>Booking request sent</h2></div>
        </header>
        <p class="success-copy">Your booking request has been prepared. Please complete the WhatsApp message and wait for Soul Food to confirm availability.</p>
        <div class="checkout-actions">
          <button type="button" class="btn btn-primary" data-booking-home>BACK HOME</button>
          <button type="button" class="btn btn-outline" data-booking-menu>VIEW MENU</button>
        </div>
      </div>
    `;
    document.body.appendChild(bookingSuccess);
    bookingSuccess.querySelector("[data-booking-home]").addEventListener("click", () => { bookingSuccess.close(); window.location.href = "index.html"; });
    bookingSuccess.querySelector("[data-booking-menu]").addEventListener("click", () => { bookingSuccess.close(); window.location.href = "menu.html"; });
    bookingSuccess.showModal();
  });

  bookingEmail.addEventListener("click", () => {
    const draft = buildBookingDraft();
    const subject = encodeURIComponent(`Table Booking Request — ${draft.name} — ${formatBookingDate(draft.date)}`);
    const body = encodeURIComponent(buildBookingEmailBody(draft));
    const mailto = `mailto:${encodeURIComponent(restaurantConfig.email)}?subject=${subject}&body=${body}`;
    bookingReviewDialog.close();
    window.location.href = mailto;
    analyticsEvents.track("booking_email_clicked", { date: draft.date, guests: draft.guests });
    const bookingSuccess = document.createElement("dialog");
    bookingSuccess.className = "success-dialog";
    bookingSuccess.innerHTML = `
      <div class="checkout-panel">
        <header class="checkout-header">
          <div><p class="eyebrow">BOOKING REQUEST</p><h2>Booking request sent</h2></div>
        </header>
        <p class="success-copy">Your booking request has been prepared in your email app. Please wait for Soul Food to confirm availability.</p>
        <div class="checkout-actions">
          <button type="button" class="btn btn-primary" data-booking-home>BACK HOME</button>
          <button type="button" class="btn btn-outline" data-booking-menu>VIEW MENU</button>
        </div>
      </div>
    `;
    document.body.appendChild(bookingSuccess);
    bookingSuccess.querySelector("[data-booking-home]").addEventListener("click", () => { bookingSuccess.close(); window.location.href = "index.html"; });
    bookingSuccess.querySelector("[data-booking-menu]").addEventListener("click", () => { bookingSuccess.close(); window.location.href = "menu.html"; });
    bookingSuccess.showModal();
  });

  const saveCart = () => {
    try {
      localStorage.setItem(cartKey, JSON.stringify([...cart].map(([name, quantity]) => ({ name, quantity }))));
    } catch {
      status.textContent = "Cart changes will only last for this visit.";
    }
  };

  const clearCart = () => {
    cart.clear();
    saveCart();
    renderCart();
  };

  const totalItems = () => [...cart.values()].reduce((sum, quantity) => sum + quantity, 0);
  const amount = (price) => Number(price.replace(/[^0-9]/g, ""));
  const formatPrice = (value) => `₦${value.toLocaleString("en-NG")}`;

  const renderCart = () => {
    const itemCount = totalItems();
    count.textContent = String(itemCount);
    count.setAttribute("aria-label", `${itemCount} ${itemCount === 1 ? "item" : "items"}`);
    if (mobileCartCount) {
      mobileCartCount.textContent = String(itemCount);
      mobileCartCount.setAttribute("aria-label", `${itemCount} ${itemCount === 1 ? "item" : "items"}`);
    }
    if (mobileCartTrigger) {
      mobileCartTrigger.setAttribute("aria-label", `Open cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`);
    }
    launch.setAttribute("aria-label", `Open order cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`);
    const entries = [...cart].map(([name, quantity]) => ({ item: findItem(name), quantity }));

    itemsContainer.innerHTML = entries.map(({ item, quantity }) => `
      <article class="cart-item">
        <img src="${item.image}" alt="" loading="lazy" />
        <div class="cart-item-copy"><h3>${item.name}</h3><span>${item.price}</span>
          <div class="cart-quantity" aria-label="Quantity for ${item.name}">
            <button type="button" data-cart-decrease="${item.name}" aria-label="Decrease ${item.name} quantity">−</button>
            <span>${quantity}</span>
            <button type="button" data-cart-increase="${item.name}" aria-label="Increase ${item.name} quantity">+</button>
          </div>
        </div>
        <button class="cart-remove" type="button" data-cart-remove="${item.name}" aria-label="Remove ${item.name}">×</button>
      </article>
    `).join("");

    emptyMessage.hidden = entries.length > 0;
    itemsContainer.hidden = entries.length === 0;
    const total = entries.reduce((sum, { item, quantity }) => sum + amount(item.price) * quantity, 0);
    subtotal.textContent = formatPrice(total);
    checkout.disabled = entries.length === 0;
  };

  launch.addEventListener("click", () => dialog.showModal());
  if (mobileCartTrigger) {
    mobileCartTrigger.addEventListener("click", (event) => {
      event.preventDefault();
      dialog.showModal();
    });
  }
  dialog.querySelector(".cart-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  document.addEventListener("click", (event) => {
    const orderButton = event.target.closest("[data-order-now]");
    if (orderButton) {
      const item = findItem(orderButton.dataset.orderNow);
      if (!item) return;
      cart.set(item.name, (cart.get(item.name) || 0) + 1);
      saveCart();
      renderCart();

      const label = orderButton.querySelector("span");
      if (label) {
        clearTimeout(orderButton.feedbackTimer);
        orderButton.classList.add("is-added");
        label.textContent = "ADDED";
        orderButton.setAttribute("aria-label", `${item.name} added to cart`);
        orderButton.feedbackTimer = setTimeout(() => {
          orderButton.classList.remove("is-added");
          label.textContent = "ADD TO CART";
          orderButton.setAttribute("aria-label", `Add ${item.name} to cart`);
        }, 1400);
      }
      analyticsEvents.track("cart_item_added", { item: item.name, quantity: cart.get(item.name) });
      return;
    }

    const increaseButton = event.target.closest("[data-cart-increase]");
    const decreaseButton = event.target.closest("[data-cart-decrease]");
    const removeButton = event.target.closest("[data-cart-remove]");
    if (increaseButton) {
      const name = increaseButton.dataset.cartIncrease;
      cart.set(name, (cart.get(name) || 0) + 1);
    } else if (decreaseButton) {
      const name = decreaseButton.dataset.cartDecrease;
      const quantity = (cart.get(name) || 0) - 1;
      if (quantity > 0) cart.set(name, quantity);
      else cart.delete(name);
    } else if (removeButton) {
      cart.delete(removeButton.dataset.cartRemove);
    } else {
      return;
    }
    saveCart();
    renderCart();
  });

  checkout.addEventListener("click", () => {
    const entries = [...cart].map(([name, quantity]) => ({ item: findItem(name), quantity }));
    if (!entries.length) {
      status.textContent = "Your cart is empty. Add a dish before checking out.";
      return;
    }
    updateCheckoutSummary();
    checkoutDialog.showModal();
  });

  renderCart();
}

function setupNavigation() {
  if (!menuToggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function setupHeaderScroll() {
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function setupFilters() {
  const filterButtons = document.querySelectorAll(".category-tabs button");
  const menuSearch = document.querySelector("#menuSearch");
  const resultCount = document.querySelector(".menu-result-count");

  const updateMenuView = () => {
    const category = document.querySelector(".category-tabs button.active")?.dataset.category || "all";
    const query = (menuSearch?.value || "").trim().toLowerCase();
    const items = restaurantData.menu.filter((item) => {
      const matchesCategory = category === "all" || item.category === category;
      const haystack = `${item.name} ${item.description} ${item.category}`.toLowerCase();
      const matchesQuery = !query || haystack.includes(query);
      return matchesCategory && matchesQuery;
    });

    if (foodGrid) {
      foodGrid.innerHTML = items
        .map((item) => `
          <article class="food-card" data-category="${item.category}">
            <div class="food-image">
              <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async" width="640" height="480" />
            </div>
            <div class="food-info">
              <div class="food-meta">
                <small>${item.category}</small>
                <span class="price">${item.price}</span>
              </div>
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <button class="food-order" type="button" data-order-now="${item.name}" aria-label="Add ${item.name} to cart">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L21 8H6" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg>
                <span aria-live="polite">ADD TO CART</span>
              </button>
            </div>
          </article>
        `)
        .join("");

      if (!items.length) {
        foodGrid.innerHTML = `
          <article class="food-card empty-menu-state">
            <div class="food-info">
              <h3>No dishes match your search</h3>
              <p>Try a different category or search for something like rice, wings, or pasta.</p>
              <button class="food-order" type="button" data-reset-menu-search>RESET FILTERS</button>
            </div>
          </article>
        `;
      }
    }

    if (resultCount) {
      resultCount.textContent = `Showing ${items.length} ${items.length === 1 ? "dish" : "dishes"}`;
    }
  };

  if (!filterButtons.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        const active = btn === button;
        btn.classList.toggle("active", active);
        btn.setAttribute("aria-pressed", String(active));
      });
      updateMenuView();
    });
  });

  menuSearch?.addEventListener("input", updateMenuView);
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-reset-menu-search]")) {
      if (menuSearch) menuSearch.value = "";
      filterButtons.forEach((btn) => {
        const active = btn.dataset.category === "all";
        btn.classList.toggle("active", active);
        btn.setAttribute("aria-pressed", String(active));
      });
      updateMenuView();
    }
  });

  updateMenuView();
}

function setupLightbox() {
  const modal = document.createElement("div");
  modal.className = "lightbox";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="lightbox-inner">
      <button type="button" class="lightbox-close" aria-label="Close image">×</button>
      <img src="" alt="Expanded gallery" />
    </div>
  `;
  document.body.appendChild(modal);

  const image = modal.querySelector("img");
  const button = modal.querySelector(".lightbox-close");

  const openLightbox = (src, alt) => {
    image.src = src;
    image.alt = alt;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  };

  const closeLightbox = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".gallery-item");
    if (trigger) {
      const src = trigger.dataset.image;
      const caption = trigger.dataset.caption || "Soul Food gallery";
      openLightbox(src, caption);
      return;
    }

    if (event.target === modal || event.target.closest(".lightbox-close")) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeLightbox();
    }
  });

  button?.addEventListener("click", closeLightbox);
}

function setupYear() {
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

const bookingButtons = document.querySelectorAll("[data-book-table]");
bookingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const bookingDialogNode = document.querySelector(".booking-dialog");
    if (bookingDialogNode) {
      bookingDialogNode.showModal();
    }
  });
});

if (pageContext === "home") {
  renderMenu("all", true);
  renderSignature();
  renderGallery();
} else if (pageContext === "menu") {
  renderMenu("all", false);
} else {
  renderGallery();
}

setupNavigation();
setupHeaderScroll();
setupFilters();
setupLightbox();
setupYear();
setupCart();
