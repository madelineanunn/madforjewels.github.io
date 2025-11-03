const form = document.getElementById("checkout-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Collect customer & order data
  const customerData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    address: form.address.value,
    city: form.city.value,
    province: form.province.value,
  };

  // In a real app, send customerData to your backend and create a transaction
  // Your backend calls Midtrans API, then returns snapToken for this order
  // For demo, use a dummy token here (replace with real token from backend)
  const snapToken = "YOUR_SNAP_TOKEN_FROM_BACKEND";

  if (snapToken === "YOUR_SNAP_TOKEN_FROM_BACKEND") {
    alert("Please replace 'YOUR_SNAP_TOKEN_FROM_BACKEND' with a valid token from your backend.");
    return;
  }

  // Call Midtrans Snap popup
  window.snap.pay(snapToken, {
    onSuccess: function (result) {
      alert("Payment success! Thank you for your order.");
      console.log(result);
      // You can redirect to order confirmation page here
    },
    onPending: function (result) {
      alert("Payment is pending. Please complete your payment.");
      console.log(result);
    },
    onError: function (result) {
      alert("Payment failed or canceled.");
      console.log(result);
    },
    onClose: function () {
      alert("You closed the payment popup without finishing.");
    },
  });
});
