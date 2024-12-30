
  document.addEventListener("DOMContentLoaded", async () => {
    const API_URL = "../api/db.json";
    const productContainer = document.getElementById("product-container");
    const template = document.getElementById("product-card-template");

    try {
      const response = await fetch(API_URL);
      const products = await response.json();

      // Filter products excluding 'keyboard' and 'mouse' categories
      const filteredProducts = products.filter(product => 
        product.category !== "keyboard" && product.category !== "mouse"
      );

      // Render products
      filteredProducts.forEach(product => {
        const card = template.content.cloneNode(true);

        // Set product details
        card.querySelector(".card-image").src = product.imageUrl;
        card.querySelector(".card-image").alt = product.name;
        card.querySelector(".card-discount").textContent = `${Math.round((product.discount / product.mrp) * 100)}% OFF`;
        card.querySelector(".card-title").textContent = product.name;
        card.querySelector(".card-price").textContent = `$${product.currentPrice}`;
        card.querySelector(".card-price-strike").textContent = `$${product.mrp}`;

        // Append the card to the container
        productContainer.querySelector(".flex").appendChild(card);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  });

