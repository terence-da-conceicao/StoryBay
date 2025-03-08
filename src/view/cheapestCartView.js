import { getCheapestCart } from "../controller/cheapestCartController.js"
// import { cart } from "../script.js"


export function displayCheapestCart(cart, offers) {
    const { newCart, reducedTotal } = getCheapestCart(cart, offers)

    displayTitle();
    displayReducedItems(newCart);
    displayReducedTotal(reducedTotal);
}


function displayTitle() {
    let title = document.getElementById("calcul")
    title.innerHTML = "Calcul de vos réductions...";
}


function displayReducedItems(cart) {
    const ul = document.getElementById("reductionsDetails")
    for (let i = 0; i < cart.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `${cart[i].title}, ${cart[i].price}€`;
        ul.appendChild(li);
    }
}

function displayReducedTotal(total) {
    // console.log("vous économisez ",saved, " sur un total de ", total, "et payez donc", newTotal, "€." )
   document.getElementById("displayReducedTotalElement").innerHTML = `Total avec les réductions: ${total.toFixed(2)}€`
}





