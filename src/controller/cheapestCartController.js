import { applyDiscount1, applyDiscount2, applyDiscount3 } from "./offersController.js"

let newCart;

export function getCheapestCart(cart, offers) {
    newCart = applyDiscount1(cart, offers);

    let discountTotal = 0;
    newCart.forEach((book) => discountTotal += book.price);
    discountTotal = applyDiscount2(discountTotal, offers);

    if (discountTotal >= 100) {
        discountTotal = applyDiscount3(discountTotal, offers);
    }
    return discountTotal
}
