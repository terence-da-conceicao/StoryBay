export function removeItem(line, index, cart) {
    if (cart.length === 0) {
        console.log("cart est vide");
    } else if (index < -1 || index > cart.length-1) {
        console.log("problème d'index");
    } else {
        cart.splice(index, 1);
        line.remove();
    }
}


export function getTotal(cart){
    //récupérer le prix total des livres, sans réductions
    let total = 0;
    cart.forEach( (item) => total += item.price)
//ici, total est un number
    return total
}

export function toClear(cart) {
    cart.length = 0;
    console.log("cart vidé:", cart);
}

