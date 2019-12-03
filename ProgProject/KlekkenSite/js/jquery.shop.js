
function add_to_cart(id) {
	if (!window.localStorage.getItem(id)) {
		window.localStorage.setItem(id, 1);
	} else {
		window.localStorage.setItem(id, parseInt(1) + parseInt(window.localStorage.getItem(id)));
	}
	alert(window.localStorage.getItem(id));
}


function add_to_cart_item(){
	alert("clicked")
}


document.getElementById("tent-1").addEventListener("click", add_to_cart_item);


/*function add() {

	var tableRef = document.getElementsByClassName('shopping-cart').getElementsByTagName('tbody')[0];
	var newRow = tableRef.insertRow();
	var newCell = newRow.insertCell();
	var newText = document.createTextNode('New row');
	newCell.appendChild(newText);
	alert("you did it!")
}
*/

function clear_cart(){
	alert("cart cleared")
}




//inspirasjon fra W3schools
function deleteRow(r) {
	var i = r.parentElement.parentElement.rowIndex;
	document.getElementById("itemTable").deleteRow(i);
}



// inspirasjon fra W3schools
function myCreateFunction() {
	var table = document.getElementById("itemTable");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = "Item";
	cell2.innerHTML = "Price";
	cell3.innerHTML = "Quantity";
	cell4.innerHTML = "<input type=\"button\" value='Remove' onclick='deleteRow(this)'>";
}

