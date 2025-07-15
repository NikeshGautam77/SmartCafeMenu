function showVegItems() {
  hideAllTabs();
  document.getElementById('vegcontents').classList.add('active');
}

function showNonVegItems() {
  hideAllTabs();
  document.getElementById('nonvegcontents').classList.add('active');
}

function showdrinks() {
  hideAllTabs();
  document.getElementById('drinkcontents').classList.add('active');
}

function showdesert() {
  hideAllTabs();
  document.getElementById('desertcontents').classList.add('active');
}

// Helper to hide all tabs before showing one
function hideAllTabs() {
  document.getElementById('vegcontents').classList.remove('active');
  document.getElementById('nonvegcontents').classList.remove('active');
  document.getElementById('drinkcontents').classList.remove('active');
  document.getElementById('desertcontents').classList.remove('active');
}

// Show veg by default on load
window.onload = function () {
  showVegItems();
};
function searchMenu() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const allSections = document.querySelectorAll(".tab-content");

  // Loop through all menu sections
  allSections.forEach(section => {
    const cards = section.querySelectorAll(".menu-card");

    cards.forEach(card => {
      const title = card.querySelector("h4").textContent.toLowerCase();

      // Match text with search
      if (title.includes(query)) {
        card.style.display = "block";
        card.classList.add("highlight"); // Optional highlight
      } else {
        card.style.display = "none";
        card.classList.remove("highlight");
      }
    });
  });

  // Optional: remove highlight after 2 seconds
  setTimeout(() => {
    document.querySelectorAll(".menu-card.highlight").forEach(card => {
      card.classList.remove("highlight");
    });
  }, 5000);
}


function addToCart(itemName, price) {
  alert(`${itemName} (Rs. ${price}) added to cart!`);
  // You can replace this with actual cart logic later
}

let cart = [];

function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price });
  renderCart();
}

function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalContainer = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rs. ${item.price}`;
    cartItemsContainer.appendChild(li);
    total += item.price;
  });

  cartTotalContainer.textContent = `Total: Rs. ${total}`;
}
function filterMenu() {
  const filter = document.getElementById("filter").value;

  // Find currently visible tab-content (the active one)
  const activeSection = document.querySelector(".tab-content.active");
  if (!activeSection) return;

  const cards = Array.from(activeSection.querySelectorAll(".menu-card"));

  // Helper to extract price
  const getPrice = (card) => {
    const priceText = card.querySelector("p").textContent;
    return parseInt(priceText.replace(/\D/g, ""));
  };

  // Sort cards based on filter value
  cards.sort((a, b) => {
    const priceA = getPrice(a);
    const priceB = getPrice(b);

    if (filter === "price-asc") return priceA - priceB;
    if (filter === "price-desc") return priceB - priceA;
    return 0;
  });

  // Append cards back in sorted order
  const grid = activeSection.querySelector(".menu-grid");
  cards.forEach(card => grid.appendChild(card));
}
