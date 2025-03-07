import { getReducedTotal } from "../controller/cheapestCartController.js"


export function displayCheapestCart(cart, offers) {
    let ul = document.getElementById("reductionsDetails")
    let title = document.getElementById("calcul")
    title.innerHTML = "Calcul de vos réductions...";
    const { newCart, reducedTotal } = getReducedTotal(cart, offers);


    console.log(newCart)
    for (let i = 0; i < newCart.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `${newCart[i].title}, ${newCart[i].price}€`;
        ul.appendChild(li)
    }

    document.getElementById("displayReducedTotalElement").innerHTML = `Total avec les réductions: ${reducedTotal.toFixed(2)}€`
    // console.log("vous économisez ",saved, " sur un total de ", total, "et payez donc", newTotal, "€." )

}





