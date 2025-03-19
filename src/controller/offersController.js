
// -5% sur chaque livre
export function applyDiscount1(cart, offers) {
    const percentage = offers.offers[0].value / 100;
    const newCart = cart.map((book) => ({
        ...book, 
        price: parseInt((book.price * (1-percentage)).toFixed(2))
    }));
    return newCart
}


// -15% sur le total
export function applyDiscount2(total, offers) {
    const minus = offers.offers[1].value / 100; 
    const newTotal = total * (1 - minus);
    return newTotal
}

//12€ tous les 100€
export function applyDiscount3(total, offers) {
    const slice = offers.offers[2];
    const saved = ((total-(total%slice.sliceValue))/slice.sliceValue)* slice.value;
    let newTotal = total-saved;
    return newTotal
}