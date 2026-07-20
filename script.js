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

Let recei