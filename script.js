// ---------- 1. ADD TO CART ----------
// Every time someone clicks "Add to Cart", the number goes up by 1.
var cartCount = 0;
var addButtons = document.querySelectorAll(".card .add-btn");

for (var i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", function () {
    cartCount = cartCount + 1;
    document.getElementById("cart-count").textContent = cartCount;
  });
}

// ---------- 2. CATEGORY FILTER ----------
// Click a category button -> show only the cards from that category.
var filterButtons = document.querySelectorAll(".filter-btn");
var cards = document.querySelectorAll(".card");

for (var j = 0; j < filterButtons.length; j++) {
  filterButtons[j].addEventListener("click", function () {
    var chosen = this.dataset.category;

    // move the brown "active" color to the clicked button
    for (var k = 0; k < filterButtons.length; k++) {
      filterButtons[k].classList.remove("active");
    }
    this.classList.add("active");

    // show or hide each card
    for (var m = 0; m < cards.length; m++) {
      if (chosen === "All" || cards[m].dataset.category === chosen) {
        cards[m].style.display = "block";
      } else {
        cards[m].style.display = "none";
      }
    }
  });
}
