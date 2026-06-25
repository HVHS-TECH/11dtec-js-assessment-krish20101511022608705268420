
///Functions
function startOrder() {
let nameInput = document.getElementById("customerName").value;
let message = "Order started:\n " + " Customer name: " + nameInput;
document.getElementById("outputMessage").innerText = message;
}