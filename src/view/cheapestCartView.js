import { getCheapestCart } from "../controller/cheapestCartController.js"
// import { cart } from "../script.js"


export function displayCheapestCart(cart, offers) {
    const { newCart, reducedTotal } = getCheapestCart(cart, offers)

    displayTitle();
    setTimeout(() => {
        let annonce = document.getElementById("annonceReduce1");
        annonce.innerHTML = "5% de réduction sur chaque livre!";
    }, 1500);
    setTimeout(() => {
        displayReducedItems(newCart);
    },2000);
    setTimeout(() => {
        displayReducedTotal(reducedTotal);
    }, 3000);
}



function displayTitle() {
    let title = document.getElementById("calcul");
    title.innerHTML = "Calcul de vos réductions...";
}


function displayReducedItems(cart) {
    const ul = document.getElementById("reducedBooks")
    for (let i = 0; i < cart.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `${cart[i].title}, ${cart[i].price}€`;
        ul.appendChild(li);
    }
}

function displayReducedTotal(total) {
    // console.log("vous économisez ",saved, " sur un total de ", total, "et payez donc", newTotal, "€." )
    let details = document.getElementById("reductionsDetails")
    let finalTotalText = document.getElementById("displayReducedTotalElement")
    let extraReduce = "";
    if (total >= 100) {
        extraReduce = " et 12€ de réduction par tranche de 100€"
    }
    
   details.innerHTML = `ainsi que 15% sur l'ensemble du panier${extraReduce} !`
   finalTotalText.innerHTML = `Total avec les réductions: ${total.toFixed(2)}€`
}





