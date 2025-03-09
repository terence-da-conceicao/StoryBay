import { getCheapestCart } from "../controller/cheapestCartController.js"
import { getTotal } from "../controller/cartController.js"


export function displayCheapestCart(cart, offers) {
    const { newCart, discountTotal } = getCheapestCart(cart, offers)

    displayTitle();
    setTimeout(() => {
        let annonce = document.getElementById("annoncediscount1");
        annonce.innerHTML = "5% de réduction sur chaque livre!";
    }, 1000);
    setTimeout(() => {
        displayDiscountItems(newCart);
    },1500);
    setTimeout(() => {
        displayDiscountTotal(discountTotal, cart);
    }, 2000);
}



function displayTitle() {
    let title = document.getElementById("calcul");
    title.innerHTML = "Calcul de vos réductions...";
}


function displayDiscountItems(cart) {
    const ul = document.getElementById("discountBooks")
    for (let i = 0; i < cart.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `${cart[i].title}, ${cart[i].price}€`;
        ul.appendChild(li);
    }
}

function displayDiscountTotal(total, cart) {
    let details = document.getElementById("discountDetails")
    let finalTotalText = document.getElementById("displayDiscountTotalElement");
    let saved = document.getElementById("saved");
    let extradiscount = "";
    if (total >= 100) {
        extradiscount = " et 12€ de réduction par tranche de 100€"
    }

   details.innerHTML = `ainsi que 15% sur l'ensemble du panier${extradiscount} !`
   finalTotalText.innerHTML = `Total avec les réductions: ${total.toFixed(2)}€`
       
   let expensiveTotal = getTotal(cart)
   console.log("saved = ",(expensiveTotal-total).toFixed(2))
    saved.innerHTML = `Vous avez économisé ${(expensiveTotal-total).toFixed(2)}€`

}





