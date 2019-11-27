function add_to_cart(id) {
    if (!window.localStorage.getItem(id)) {
        window.localStorage.setItem(id, 1);
    } else {
        window.localStorage.setItem(id, parseInt(1) + parseInt(window.localStorage.getItem(id)));
    }
    alert(window.localStorage.getItem(id));
    alert("added to cart")
}
