// Handle menu button
document.getElementById("menu-btn").addEventListener("click", () => {
  alert("Menu clicked (you can open a sidebar here)");
});

// Handle language toggle
document.getElementById("lang-toggle").addEventListener("change", (e) => {
  if (e.target.checked) {
    alert("Switched to Bengali");
  } else {
    alert("Switched to English");
  }
});

// Handle login button
document.querySelector(".login-btn").addEventListener("click", () => {
  alert("Login button clicked");
});
