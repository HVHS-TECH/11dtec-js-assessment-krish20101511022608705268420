let menuItems = [
{name: "T200 Turbocharger", price: 600},
{name:  "T400 Turbocharger", price: 1200},
{name: "T600 Turbocharger", price: 1800},
{name: "T200 Supercharger", price: 600},
{name: "T400 Supercharger", price: 1200},
{name: "T600 Supercharger", price: 1800},
{name: "High perforamance Intercooler kit", price: 750},
{name: "Performance Cold Air Intake", price: 140},
{name: "Carbon Exhaust tip", price:100},
{name: "BOV(Blow off Valve)", price: 67},
{name: "Redline Performance Radiator", price: 300},
{name: "High performance spark plugs", price: 50},
{name: "high performance 2000hp fuel pump:", price: 400},
{name: "High performance fuel injectors", price: 200},
{name: "Boost tap", price: 50},
{name: "Redline Performance ECU MXT6700", price: 1200},
];

let currentTotal = 0;
let orderedItemsList = "";

function addItem(itemName, itemPrice){
currentTotal =Number (currentTotal) + Number(itemPrice);
orderedItemsList += `${itemName}: $${Number(itemPrice).toFixed(2)}<br>`;
document.getElementById("orderItemsDisplay").innerHTML = orderedItemsList;
}
  
function submitOrder(){
let name = document.getElementById("customerName").value;
let payment = Number(document.getElementById("moneyPaid").value);

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
"<p>3. Total Order Cost: $ " + Number(currentTotal).toFixed(2) + "</p>" +
"<p>4. Money Given: $" + payment.toFixed(2)+ "</p>" +
"<p>5. Change: $" + totalChange.toFixed(2) + "</p>";

document.getElementById("receipt").innerHTML = receiptOrder;
}

function clearAll(){
currentTotal = 0;
orderedItemsList = "";
document.getElementById("orderItemsDisplay").innerHTML ="";
document.getElementById("customerName").value = "";
document.getElementById("moneyPaid").value = "";
document.getElementById("receipt").innerHTML = "";
}