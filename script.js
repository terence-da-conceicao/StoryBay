import { getData } from "./src/controller/dataController.js"
import { getSelectedBook } from "./src/controller/formController.js"
import { createDatalist } from "./src/view/datalist.js"
import { setBookState, addToCart } from "./src/controller/bookCardController.js"
import { displayBookCard } from "./src/view/bookCardView.js"
import { displayCart } from "./src/view/cartView.js"


const booksList = await getData('src/model/books.json')  //récupération des models books et offers.//idéalement il faudrait les passer avec des arguemnts, non?
const offers = await getData('src/model/offers.json')
let isBookAvailable = false;
let selectedBook;
let cart = [];
let addButton = document.getElementById("addToCart");


// console.log("offers : ", offers)
// console.log("booksList : ", booksList)


createDatalist(booksList) //affichage du model books sous la forme d'une datalist

//quand on recherche le livre et le soumet
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(), 
    updateBook()
    displayBookCard(isBookAvailable, selectedBook, addButton) // on affiche la bookCard (titre + bouton d'ajout)
});

//update les infos du book choisi, update son état
function updateBook() {
    selectedBook = getSelectedBook(selectedBook, booksList)
    isBookAvailable = setBookState(selectedBook) //on modifie l'état du livre
}

//quand on ajoute au panier
addButton.addEventListener("click", (event) => {
        event.preventDefault();
        addToCart(selectedBook, cart)
        displayCart(selectedBook)/* change le style none de l'espace cart en block et ajoute une ligne par livre choisi */
    }
)





// let cartText = document.getElementById("cartText");
// let displayTotalElement = document.getElementById("displayTotalElement");
// let reducedTotal = 0;
// let total = 0



// document.getElementById("validate").addEventListener("click", displayAllTotals);


// function getTotal(){
//     let total = 0
//     cart.forEach( (item) => 
//         total += item.price
//     )
//     return total
// }


// function displayAllTotals() {
//     if (displayTotalElement.style.display === "none") {
//         displayTotalElement.style.display = "block";
//     }
//     displayTotal()
//     displayReducedTotal()
// }



// function displayTotal() {
//     total = getTotal();
//     displayTotalElement.innerHTML = `Total : ${total}€`
// }



// function displayReducedTotal() {
//     let { newCart, reducedTotal } = getCheapestCart()
//     let ul = document.getElementById("reductionsDetails")
//     document.getElementById("calcul").innerHTML = "Calcul de vos réductions...";
//     for (let i = 0; i < newCart.length; i++) {
//         console.log(newCart[i])
//         const li = document.createElement("li");
//         li.innerHTML = `${newCart[i].title}, ${newCart[i].price}€`;
//         ul.appendChild(li)
//     }
//     // console.log("vous économisez ",saved, " sur un total de ", total, "et payez donc", newTotal, "€." )
//     document.getElementById("displayReducedTotalElement").innerHTML = `Total avec les réductions: ${reducedTotal.toFixed(2)}€`
// }



// // function getReducedTotal()


// function getCheapestCart() {
//     let { newCart, reducedTotal } = applyReduce1();
//     const reducedTotal2 = applyReduce2(reducedTotal);
//     console.log(reducedTotal%100)


//     if ((reducedTotal%100) == 0) {
//         const reducedTotal3 = applyReduce3(reducedTotal2)
//         console.log("total avec réduction dans getCheapestCart():",reducedTotal2)
//         console.log("cart avec réduction1: ",newCart);
//         return reducedTotal3 
//     } else {
//         console.log("total avec réduction dans getCheapestCart():",reducedTotal2)
//         console.log("cart avec réduction1: ",newCart);
//         return { newCart, reducedTotal: reducedTotal2 }
//     }
// }


// function applyReduce1() {
//     console.log("verif si reducedTotal ets bien globale :", reducedTotal)
//     const percentage = offers.offers[0].value / 100; //on récupère la valeur correspondant à 0,05
//     const newCart = cart.map((book) => ({
//         ...book, 
//         price: parseInt((book.price * (1-percentage)).toFixed(2))
//     }));
    
//     newCart.forEach( (book) => reducedTotal += book.price)
//     console.log("total avec réduction dans applyReduce1():",reducedTotal)
//     return { newCart, reducedTotal }
// }



// function applyReduce2(total) {
//     const minus = offers.offers[1].value / 100; 
//     const newTotal = total * (1 - minus)
//     return newTotal
// }


// function applyReduce3(total) {
//     const slice = offers.offers[2]
//     const saved = ((total-(total%slice.sliceValue))/slice.sliceValue)* slice.value;
//     let newTotal = total-saved
//     return newTotal
// }







// // function displayReductionsDetails() {
//     //     let displayReducedTotal = document.getElementById("displayReducedTotal");
//     //     displayReducedTotal = `Voici le détail de vos réductions. 
//     //     <\n> 5 % de réduction sur chaque livre. 
//     //     <\n> 15% de réduction sur le panier total.
//     //     <\n> Tous les 100€, 12€ sont déduits..`
//     // }



// // FAIRE EXEMPLE 2 livres 30 et 35€ = panier de 50€ avec réductions

// /* offers : 
// - 5 % de réduction sur chaque livre
// - 15% de réduction sur le panier total
// - Tous les 100€, 12€ sont déduits. */
