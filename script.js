// ---------- 1. ADD TO CART ----------
var cartCount = 0;
var addButtons = document.querySelectorAll(".product .add-btn");

for (var i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", function () {
    cartCount = cartCount + 1;
    document.getElementById("cart-count").textContent = cartCount;
  });
}

// ---------- 2. CATEGORY FILTER ----------
// "d-none" is a Bootstrap class that hides things.
var filterButtons = document.querySelectorAll(".filter-btn");
var products = document.querySelectorAll(".product");

for (var j = 0; j < filterButtons.length; j++) {
  filterButtons[j].addEventListener("click", function () {
    var chosen = this.dataset.category;

    for (var k = 0; k < filterButtons.length; k++) {
      filterButtons[k].classList.remove("active");
    }
    this.classList.add("active");

    for (var m = 0; m < products.length; m++) {
      if (chosen === "All" || products[m].dataset.category === chosen) {
        products[m].classList.remove("d-none");
      } else {
        products[m].classList.add("d-none");
      }
    }
  });
}
