// Simple cart logic
const cart = [];
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const cartDrawer = document.getElementById('cart-drawer');

document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.parentElement.querySelector('h3').innerText;
    const price = parseFloat(btn.dataset.price);
    cart.push({name, price});
    renderCart();
    openCart();
  });
});

function renderCart() {
  cartItemsEl.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - $${item.price}`;
    cartItemsEl.appendChild(li);
    total += item.price;
  });
  cartTotalEl.innerText = total.toFixed(2);
}

function openCart() {
  cartDrawer.classList.add('open');
}
document.getElementById('close-cart').addEventListener('click', () => {
  cartDrawer.classList.remove('open');
});