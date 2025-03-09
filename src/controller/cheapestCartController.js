import { applyDiscount1, applyDiscount2, applyDiscount3 } from "./offersController.js"



export function getCheapestCart(cart, offers) {
    const newCart = applyDiscount1(cart, offers); //panier avec prix baissés de 5%
    console.log("réduction 1 :", newCart);

    let discountTotal = 0;
    newCart.forEach((book) => discountTotal += book.price);//obtenir discountTotal après réduction 1
    discountTotal = applyDiscount2(discountTotal, offers);// après la 2eme
    console.log("réduction 2 :", discountTotal);

    if (discountTotal >= 100) {
        discountTotal = applyDiscount3(discountTotal, offers); // après la 3eme
        console.log("réduction 3 :", discountTotal);
    } else {
        console.log("pas de réduction 3");
    }
    return { newCart, discountTotal }
}
