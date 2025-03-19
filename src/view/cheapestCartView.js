import { getCheapestCart } from "../controller/cheapestCartController.js"
import { getTotal } from "../controller/cartController.js"


function displayDiscountMessage() {
    let message = document.getElementById("calcul");
    message.innerHTML = "Calcul de vos réductions...";
}


function displayDiscount1() {
    let message1 = document.getElementById("discount1Message");
    message1.innerHTML = "• 5% de réduction sur chaque livre";
}

function displayDiscount2(){
    let message2 = document.getElementById("discount2Message");
    message2.innerHTML = `• 15% sur l'ensemble du panier`;
}

function displayDiscount3(total) {
    let message3 = document.getElementById("discount2Message");
    if (total >= 100) {
        console.log("total supérieur à 100€")
        message3 = " • 12€ de réduction par tranche de 100€";
    }
}

function displayFinalTotalandSaved(discountTotal, expensiveTotal) {
    let finalTotalText = document.getElementById("discountTotalMessage");
    let saved = document.getElementById("saved");

    finalTotalText.innerHTML = `Total avec les réductions: ${discountTotal.toFixed(2)}€`;
    saved.innerHTML = `Vous avez économisé ${(expensiveTotal-discountTotal).toFixed(2)}€! 💸`;
}



export function displayCheapestCart(cart, offers) {
    let initialTotal = getTotal(cart);
    const discountTotal = getCheapestCart(cart, offers);

    setTimeout(() => {displayDiscountMessage()}, 500); //calcul de vos réductions....

    setTimeout(() => {displayDiscount1()}, 1000); // 5% sur chaque livre!
    setTimeout(() => {displayDiscount2()}, 1500); // 15% sur l'ensemble du panier!
    setTimeout(() => {displayDiscount3(initialTotal)}, 2000); // 12€ de réduction par tranche de 100€!!

    setTimeout(() => {displayFinalTotalandSaved(discountTotal, initialTotal)}, 3000);
    // display5pctsDiscount();
    // displayDiscountTotal(discountTotal, cart);
}




export function undisplayCheapestCart() {
    const cheapestCart = document.getElementById("finalCart");
    if (cheapestCart) {
      const children = cheapestCart.children;
      for (let i = 0; i < children.length; i++) {
        children[i].innerHTML = "";
      }
    }
  }



