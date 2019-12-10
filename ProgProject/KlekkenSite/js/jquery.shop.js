
/*legger til id i localstorage dersom den ikke er der fra før, julie*/
function add_to_cart(id) {
	if (!window.localStorage.getItem(id)) {
		window.localStorage.setItem(id, 1);
	} else {
		window.localStorage.setItem(id, 1 + parseInt(window.localStorage.getItem(id)));
	}
}


//fjerne fra localstorage, julie
function removeItemFromCart(name){
window.localStorage.removeItem(name);
alert(name + " removed");
location.reload();
}


//inspirasjon fra W3schools, henter foreldreelementet til foreldreelementet og sletter dermed raden, fjerner fra ls, julie
function deleteRow(r){
	var i = r.parentElement.parentElement.rowIndex;
	document.getElementById("itemTable").deleteRow(i);
	removeItemFromCart();
}



// ?????
window.localStorage.setItem("items", JSON.stringify(items));

var items = JSON.parse(window.localStorage.getItem("items"));
for (var i in items){
	alert(items[i].name);
}



//window.localStorage.setItem(“keys”, keys);, julie
for (items in window.localStorage.getItem('items')) {
	if (window.localStorage.getItem(items.name)) {
	}
}


//forloop, window.localStorage.getItem(items.name);, julie,

	function fillItems() {
		var items = [{name: "tent-1", price: 1000}, {name: "tent-2", price: 1500}, {name: "Tableware", price: 200}];
		window.localStorage.setItem("items", JSON.stringify(items))
	}


/*Funksjonen bygger en rad ved å hente items fra ls, gjøre om til JSON. forløkke for å løkke seg gjennom items, og
lager raden dersom vi har lagt produktet i handlevognen lager den raden.*/
	function buildTable() {
		var items = JSON.parse(window.localStorage.getItem("items"));
		var table = document.getElementById("itemTable");
		for (var i in items) {
			var item = items[i];
			if (window.localStorage.getItem(item.name)) {
				var row = table.insertRow(-1);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
				cell1.innerHTML = item.name;
				cell2.innerHTML = item.price;
				cell3.innerHTML = window.localStorage.getItem(item.name);
				cell4.innerHTML = "<input id=" + item.name + " type=\"button\" " +
					"onclick='removeItemFromCart(this.id);' value='Remove'>";
			}
		}
	}



// + er bare det samme som å slå sammen strenger, funket her fordi jeg har streng+ item.name

function checkOut() {
	alert ("Your request has been made")
}
