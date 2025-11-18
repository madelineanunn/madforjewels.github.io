// Simple cart system (client-side)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item to cart
function addToCart(productName, price) {
  const existingItem = cart.find(item => item.name === productName);
  if (existingItem) {
    existingItem.qty++;
  } else {
    cart.push({ name: productName, price: price, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(productName + " added to cart!");
}

// Display cart items (on cart.html)
function displayCart() {
  const cartTable = document.getElementById("cart-items");
  if (!cartTable) return;

  cartTable.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>$${(item.price * item.qty).toFixed(2)}</td>
    `;
    cartTable.appendChild(row);
    total += item.price * item.qty;
  });

  document.getElementById("cart-total").textContent = "$" + total.toFixed(2);
}

// Clear cart after checkout (on confirmation.html)
function clearCart() {
  localStorage.removeItem("cart");
}

// Handle registration (client-side only for now)
function handleRegister(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Simulate storing user (localStorage, just for demo)
  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Registration successful! You can now log in.");
  window.location.href = "login.html";
}
