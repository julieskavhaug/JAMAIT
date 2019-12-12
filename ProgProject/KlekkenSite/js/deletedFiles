
 inspo fra youtube
var removeCartItemButtons = document.getElementsByClassName('btn-remove')
for (var i=0, i<removeCartItemButtons.length, i++){
    var button = removeCartItemButtons[i];
    button.addEventListener('click', function(event)){
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.remove()
        alert("youdidit")
    }
}

button does not work if first row is deleted, as the button no longer exists.
document.querySelector("#Quantity_remove").innerHTML

document.getElementById("Quantity_remove").innerHTML




cell1.innerHTML = document.getElementById("Tentname").innerHTML


legge til elementer i raden, som blir lagret i localstorage. Lage en update cart funksjon

document.getElementById("Quantity_remove").innerHTML


//Function to add a row to a cart
function add() {

    var tableRef = document.getElementsByClassName('shopping-cart').getElementsByTagName('tbody')[0];
    var newRow = tableRef.insertRow();
    var newCell = newRow.insertCell();
    var newText = document.createTextNode('New row');
    newCell.appendChild(newText);
    alert("you did it!")
}


window.localStorage.getItem(key)

for(var key in window.localStorage) {


    document.getElementById("Quantity_remove").innerHTML;
}



 onclick='deleteRow(this)'


//Lager en ny rad, henter itemTable, legger til cellene navn, pris og kvantitet, henter removebutton.
 //julie
 /*function addRow(){
     var table = document.getElementById("itemTable");
     var row = table.insertRow(1);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4 = row.insertCell(3);
     cell1.innerHTML = "Name";
     cell2.innerHTML = "Price";
     cell3.innerHTML = "Quantity";
     cell4.innerHTML = document.getElementById("Quanity_remove").innerHTML
 }
*/





function buildTable(){
    var items = [{name: "tent-1", price: 1000}, {name: "tent-2", price: 1500}, {name:"Tableware", price: 200}];
    var table = document.getElementById("itemTable");
    for (var i in items){
        var item = items[i];
        if (window.localStorage.getItem(item.name)){
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = item.name;
            cell2.innerHTML = item.price;
            cell3.innerHTML = window.localStorage.getItem(item.name);
            cell4.innerHTML = "<input id="+ item.name + " type=\"button\" onclick='removeItemFromCart(this.id);' value='Remove'>";
        }
    }
}


/*function addRow(){
	var table = document.getElementById("itemTable");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = item.name;
	cell2.innerHTML = item.price;
	cell3.innerHTML = item.quantity;
	cell4.innerHTML = <input type=\"button\" value='Remove' onclick='deleteRow(this)'>;
}


//document.getElementById("tent-1").addEventListener("click", add_to_cart_item);


function clear_cart(){ //julie
window.localStorage.clear();
	alert("cart cleared");
}


//inspirasjon fra W3schools, henter foreldreelementet til foreldreelementet og sletter dermed raden, fjerner fra ls
 // julie
function deleteRow(r){
	var i = r.parentElement.parentElement.rowIndex;
	document.getElementById("itemTable").deleteRow(i);
	removeItemFromCart();
}



// ?????
window.localStorage.setItem("items", JSON.stringify(items));



//window.localStorage.setItem(“keys”, keys);, julie
for (items in window.localStorage.getItem('items')) {
	if (window.localStorage.getItem(items.name)) {
	}
}
