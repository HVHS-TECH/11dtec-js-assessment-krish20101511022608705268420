
///Functions
function startOrder() {
let nameInput = document.getElementById("customerName").value;
let itemInput = document.gerElementById("itemChoice").value;

let itemName = "";
let itemPrice = 0;


let message = "Order started:\n " + " Customer name: " + nameInput;
document.getElementById("outputMessage").innerText = message;
}   