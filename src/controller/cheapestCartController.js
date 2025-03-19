import { applyDiscount1, applyDiscount2, applyDiscount3 } from "./offersController.js"

let newCart

export function getCheapestCart(cart, offers) {
    newCart = applyDiscount1(cart, offers); //panier avec prix baissés de 5%
    //!!!!! newCart est un objet contenant toutes les infos : items avec tous les elements du tableau items, et toutes les infos dedans. C'est trpo d'infos!
    let discountTotal = 0;

    // for (let i = 0; i < newCart.length; i++) {
    //     const book = newCart[i];
    //     discountTotal += book.items
    //     console.log("discountTotal dans getCheapestCart...", discountTotal)
    //     //la propriété price de book n'existe aps, c'était une propriété rajoutée dans le JSON, mais ce n'est pas le bon nom pour l'API Google Books. 
    // }

    newCart.forEach((book) => discountTotal += book.price);//obtenir discountTotal après réduction 1
    
    
    discountTotal = applyDiscount2(discountTotal, offers);// après la 2eme

    if (discountTotal >= 100) {
        discountTotal = applyDiscount3(discountTotal, offers); // après la 3eme
    } else {
    }
    console.log("getCheapestCart. discountTotal : ", discountTotal, " , ", typeof discountTotal)
    console.log("getCheapestCart. newCart : ", newCart, " , ", typeof newCart)

    return discountTotal
}
