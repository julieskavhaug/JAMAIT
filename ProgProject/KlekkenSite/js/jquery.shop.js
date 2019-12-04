
function add_to_cart(id) {
	if (!window.localStorage.getItem(id)) {
		window.localStorage.setItem(id, 1);
	} else {
		window.localStorage.setItem(id, 1 + parseInt(window.localStorage.getItem(id)));
	}
	alert(window.localStorage.getItem(id));
}


function add_to_cart_item(){
	alert("clicked")
}


//document.getElementById("tent-1").addEventListener("click", add_to_cart_item);




function clear_cart(){
window.localStorage.clear();
	alert("cart cleared");
}


//fjerne fra localstorage
function removeItemFromCart(){
localStorage.removeItem(keyName);
alert("remomved from cart");
}



//inspirasjon fra W3schools
function deleteRow(r){
	var i = r.parentElement.parentElement.rowIndex;
	document.getElementById("itemTable").deleteRow(i);
}



// Function to clear user from localStorage
function clearUser() {
	localStorage.clear();
	alert('row deleted');
}



var items = [{name:'tent-1', price: 1000}, {name:'tent-2', price: 1500}];



//window.localStorage.setItem(“keys”, keys);


for (item in window.localStorage.getItem('items')){
	if (window.localStorage.getItem(item.name)){
		alert ('go')}
}



// inspirasjon fra W3schools
function addRow(){
	var table = document.getElementById("itemTable");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = item.name;
	cell2.innerHTML = item.price;
	cell3.innerHTML = window.localStorage.getItem(item.name);
	cell4.innerHTML = "<input type=\"button\" value='Remove' onclick='deleteRow(this), removeItemFromCart()'>";
}


//forloop



