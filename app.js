// Example: load some product JSON and show on the page
async function loadProducts() {
  try {
    // URL of your JSON index file
    const url = "https://fatikfresh.pages.dev/products/Fresh_Vegetables.json";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to load products: " + response.status);
    }

    const products = await response.json();
    document.getElementById("message").textContent = "Available products:";

    const list = document.getElementById("product-list");
    list.innerHTML = "";

    // If products is an array of URLs
    products.slice(0, 10).forEach((productUrl, i) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${productUrl}" target="_blank">Product ${i + 1}</a>`;
      list.appendChild(li);
    });
  } catch (err) {
    document.getElementById("message").textContent = "Error: " + err.message;
  }
}

loadProducts();
