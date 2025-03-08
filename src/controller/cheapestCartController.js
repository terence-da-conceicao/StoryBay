import { applyReduce1, applyReduce2, applyReduce3 } from "./offersController.js"



export function getCheapestCart(cart, offers) {
    const newCart = applyReduce1(cart, offers); //panier avec prix baissés de 5%
    console.log("réduction 1 :", newCart);

    let reducedTotal = 0;
    newCart.forEach((book) => reducedTotal += book.price);//obtenir reducedTotal après réduction 1
    reducedTotal = applyReduce2(reducedTotal, offers);// après la 2eme
    console.log("réduction 2 :", reducedTotal);

    if (reducedTotal >= 100) {
        reducedTotal = applyReduce3(reducedTotal, offers); // après la 3eme
        console.log("réduction 3 :", reducedTotal);
    } else {
        console.log("pas de réduction 3");
    }
    return { newCart, reducedTotal }
}
