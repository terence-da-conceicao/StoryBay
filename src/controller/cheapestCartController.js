import { applyDiscount1, applyDiscount2, applyDiscount3 } from "./offersController.js"



export function getCheapestCart(cart, offers) {
    const newCart = applyDiscount1(cart, offers); //panier avec prix baissés de 5%

    let discountTotal = 0;
    newCart.forEach((book) => discountTotal += book.price);//obtenir discountTotal après réduction 1
    discountTotal = applyDiscount2(discountTotal, offers);// après la 2eme

    if (discountTotal >= 100) {
        discountTotal = applyDiscount3(discountTotal, offers); // après la 3eme
    } else {
    }
    return { newCart, discountTotal }
}
