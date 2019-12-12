
//legger til id i localStorage dersom den ikke er der fra før, og legger til hver gang man klikker. julie
function add_to_cart(id) {
	if (!window.localStorage.getItem(id)) {
		window.localStorage.setItem(id, 1);
	} else {
		window.localStorage.setItem(id, 1 + parseInt(window.localStorage.getItem(id)));
	}
}


//fjerner fra localStorage, oppdaterer siden, julie
function removeItemFromCart(name){
window.localStorage.removeItem(name);
alert(name + " removed");
location.reload();
}



//gjør at alle html-sidene kommuniserer med hverandre, og legger dem i ls. julie
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


	// " + .... + " er bare det samme som å slå sammen strenger, funket her fordi jeg har streng+ item.name

