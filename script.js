// Add functionality to the "Add to Cart" buttons
const cartButtons = document.querySelectorAll(".product-item button");

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.previousElementSibling.previousElementSibling.textContent;
    alert(`${productName} has been added to your cart!`);
  });
});

// Show/Hide Navbar on Scroll
let lastScrollPosition = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > lastScrollPosition) {
    navbar.style.top = "-60px"; // Hide navbar
  } else {
    navbar.style.top = "0"; // Show navbar
  }
  lastScrollPosition = currentScrollPosition;
});

// Add Search Functionality
const searchInput = document.querySelector(".search-input");
const productItems = document.querySelectorAll(".product-item");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  productItems.forEach((item) => {
    const productName = item.querySelector("h3").textContent.toLowerCase();
    if (productName.includes(query)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

