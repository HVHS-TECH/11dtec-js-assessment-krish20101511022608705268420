let menuItems = [
{name: "T200 Turbocharger", price: 600},



];

let currentTotal = 0;
let orderedItemsList = "";

function addItem(itemName, itemPrice){
currentTotal = currentTotal + itemPrice;
orderedItemsList = orderedItemsList + itemName + ": $" + itemPrice.toFixed(2) + "<br>";
document.getElementById("orderItemsDisplay").innerHTML = orderedItemsList;
}

function submitOrder(){
let name = document.getElementById("customerName").value;
let payment = Number(document,getElementById("moneyPaid").value);

if (name===""){
alert("Please enter your name first!");
return;
}
if (currentTotal===0){
alert("Please add items to your order!");
return;
}
if (payment < currentTotal){
alert("Error: Not enough money provided!");
return;
}


let totalChange = payment - currentTotal;

let receiptOrder = "<h3>Recipt:</h3>" +
"<p>1. Name: " + name + "</p>" +
"<p>2. Items:<br>" + orderedItemsList + "</p>" +
"<p>3. Total Order Cost: $ " + currentTotal.toFixed(2) + "</p>" +
"<p>4. Money Given: $" + payment.toFixed(2)+ "</p>" +
"<p>5. Change: $" + totalChange.toFixed(2) + "</p>";

document.getElementById("Recipt-box").innerHTML = ""
}

function clearAll(){
currentTotal = 0;
orderedItemsList = "";
document.getElementById("orderItemsDisplay").innerHTML ="";
document.getElementById("customerName").value = "";
}