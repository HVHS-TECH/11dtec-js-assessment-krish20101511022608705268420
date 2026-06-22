function startOrder() {
let nameInput = document.getElementById("customerName").value;
let message = "Order started: " + nameInput;
document.getElementById("outputMessage").innerText = message;
console.log(message);
}