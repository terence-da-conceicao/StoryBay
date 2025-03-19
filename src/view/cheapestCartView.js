import { getCheapestCart } from "../controller/cheapestCartController.js"
import { getTotal } from "../controller/cartController.js"


function displayDiscountMessage() {
    let message = document.getElementById("calcul");
    message.innerHTML = "Calcul de vos réductions...";
}


function displayDiscount1() {
    let message1 = document.getElementById("discount1Message");
    message1.innerHTML = "5% de réduction sur chaque livre";
}

function displayDiscount2(){
    let message2 = document.getElementById("discount2Message");
    message2.innerHTML = `15% sur l'ensemble du panier.`;
}

function displayDiscount3() {
    let message3 = document.getElementById("discount2Message");
    if (total >= 100) {
        message3 = " et 12€ de réduction par tranche de 100€!";
    }
}

function displayFinalTotalandSaved() {
    let finalTotalText = document.getElementById("discountTotalMessage");
    let saved = document.getElementById("saved");
    let expensiveTotal = getTotal(cart);

}


    let finalTotalText = document.getElementById("discountTotalMessage");
    let saved = document.getElementById("saved");
    let expensiveTotal = getTotal(cart);


    finalTotalText.innerHTML = `Total avec les réductions: ${total.toFixed(2)}€`;
    saved.innerHTML = `Vous avez économisé ${(expensiveTotal-total).toFixed(2)}€! 💸`;
}



export function displayCheapestCart(cart, offers) {
    const discountTotal = getCheapestCart(cart, offers);

    setTimeout(() => {displayDiscountMessage()}, 900); //calcul de vos réductions....

    setTimeout(() => {displayDiscount1()}, 900); // 5% sur chaque livre!
    setTimeout(() => {displayDiscount2()}, 2000); // 15% sur l'ensemble du panier!
    setTimeout(() => {displayDiscount3()}, 2000); // 12€ de réduction par tranche de 100€!!

    setTimeout(() => {displayDiscountTotal(discountTotal, cart)}, 3000);
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



