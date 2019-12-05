
function add_to_cart(id) { //julie
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




function clear_cart(){ //julie
window.localStorage.clear();
	alert("cart cleared");
}


//fjerne fra localstorage // julie
function removeItemFromCart(name){
window.localStorage.removeItem(name);
alert(name);
location.reload();
}



//inspirasjon fra W3schools, gets the parentelement of the parentelement of the row, and removes it (the whole row) // julie
function deleteRow(r){
	var i = r.parentElement.parentElement.rowIndex;
	document.getElementById("itemTable").deleteRow(i);
	removeItemFromCart();
}



// Function to clear user from localStorage
function clearUser() {
	localStorage.clear();
	alert('row deleted');
}






window.localStorage.setItem("items", JSON.stringify(items));

var items = JSON.parse(window.localStorage.getItem("items"));
for (var i in items){
	alert(items[i].name);
}



//window.localStorage.setItem(“keys”, keys);


for (items in window.localStorage.getItem('items')){
	if (window.localStorage.getItem(items.name)){
		alert("go")}
}



// inspirasjon fra W3schools
/*function addRow(){
	var table = document.getElementById("itemTable");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = items.name;
	cell2.innerHTML = items.price;;
	cell3.innerHTML = "quantity";
	cell4.innerHTML = "<input type=\"button\" value='Remove' onclick='deleteRow(this)'>";
}
*/



//forloop, window.localStorage.getItem(items.name);, ,

function fillItems(){
	var items = [{name: "tent-1", price: 1000}, {name: "tent-2", price: 1500}];
	window.localStorage.setItem("items",JSON.stringify(items))
}

function buildTable(){ // inspirasjon fra w3schools, og så bruker man JSON objekter til å lagre items på tross av html page. 
	var items = JSON.parse(window.localStorage.getItem("items")); // henter JSON.parse objektet fra items, fillItems().
	var table = document.getElementById("itemTable"); // henter tabellen allerede laget. 
	for (var i in items){
		var item = items[i];
		if (window.localStorage.getItem(item.name)){ // hvis objektet ligger i localStorage, som det skal gjøre, så lages tabellen.
			var row = table.insertRow(1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			//lager de forskjellige cellene i tabellen.
			cell1.innerHTML = item.name;
			cell2.innerHTML = item.price;
			cell3.innerHTML = window.localStorage.getItem(item.name);
			cell4.innerHTML = "<input id="+ item.name + " type=\"button\" onclick='removeItemFromCart(this.id);' value='Remove'>";
		// henter item.name og item.price fra r items (JSON-objekt) og bruker dette til å skrive ut matchende verdi i cellene. 
		//cell3 henter hvor mange ganger objektet har blitt lagt til i localstorage, og skriver dette i quantity.	
		}
	}
}

// + er bare det samme som å slå sammen strenger, funket her fordi jeg har streng+ item.name
