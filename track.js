
function trackShipment() {
    const trackingNumber = document.getElementById("trackingNumber").value;
    const result = document.getElementById("trackingResult");

    if (!trackingNumber) {
        result.innerHTML = "<p style='color:red;'>Please enter a tracking number.</p>";
        return;
    }

    // Simple fake tracking result simulation
    const statuses = ["Shipment received", "In transit", "At customs", "Out for delivery", "Delivered"];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    result.innerHTML = "<p><strong>Status:</strong> " + randomStatus + "</p>";
}
