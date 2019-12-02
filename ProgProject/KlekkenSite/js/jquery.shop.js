
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
	alert("FUNK");
	var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("removeShopping").deleteRow(i);
}







// inspirasjon fra W3schools
function myCreateFunction() {
	var table = document.getElementById("itemTable");
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = "NEW CELL1";
	cell2.innerHTML = "NEW CELL2";
}
