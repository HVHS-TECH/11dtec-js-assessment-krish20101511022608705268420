
///Functions
function startOrder() {
let nameInput = document.getElementById("customerName").value;
let message = "Order started: " + " Customer name: " + nameInput;
document.getElementById("outputMessage").innerText = message;
console.log(message);
}