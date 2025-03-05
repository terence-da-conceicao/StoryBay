import { offers, booksList } from "./src/data/dataController.js"

console.log("offers : ", offers)
console.log("booksList : ", booksList)



function createDatalist() {
    if (!booksList) {
        console.log("booksList n'existe pas")
        return
    }
    const datalist = document.getElementById("books");

        for (const book in booksList) {
        const option = document.createElement("option");
        option.value = booksList[book].title;
        datalist.appendChild(option);
    };
}

createDatalist()



let isBookAvailable = false;
let chosenBook;
let cart = [];
let cartText = document.getElementById("cartText");
const viewCart = document.getElementById("viewCart");
let displayTotalElement = document.getElementById("displayTotalElement");
let reducedTotal = 0;
let total = 0



createDatalist();
document.querySelector("form").addEventListener("submit", getBook);

function getBook(event) {
    event.preventDefault()
    const inputValue = document.getElementById("inputValue").value.toLowerCase();

    for (let i = 0; i < booksList.length; i++) {
        let loweredBook = booksList[i].title.toLowerCase()
        if (inputValue === loweredBook) {
            isBookAvailable = true;
            chosenBook = booksList[i];
            console.log(chosenBook)
            createBookCard(chosenBook);
            return booksList[i].title
        
        }
    }
    if (!isBookAvailable) {
        document.getElementById("bookChoice").innerHTML = "Ce livre n'est pas disponible.";
    }
}


function createBookCard(book){
    document.getElementById("bookChoice").innerHTML = `<h3>${book.title}</h3>`;
    document.getElementById("buyBook").style.display = "block";
}

document.getElementById("cartControls").addEventListener("click", event => {
    event.preventDefault();
    cart.push(chosenBook);
    displayCart()
})

//affiche le panier sans réduction (change le display)
function displayCart() {
    if (viewCart.style.display === "none") {
        viewCart.style.display = "block";
    }
    displayItem(chosenBook)
}


//affiche chaque ligne du panier sans réduction
function displayItem(book) {
    const li = document.createElement("li");
    li.innerHTML = `${book.title}, ${book.price}€`;

    const remove = document.createElement("button");
    remove.innerText = 'Retirer';
    remove.id = "remove"
    remove.addEventListener("click", (event) => deleteItem(event, book));
    li.appendChild(remove);

    items.appendChild(li);
}

//créer un bouton pour effacer une ligne et retirer l'article du panier
function deleteItem(event, bookToRemove) {
    const li = event.target.closest("li");
    const index = cart.indexOf(bookToRemove);

    if (index < -1 || index > cart.length-1) {
        console.log("problème d'index")
    } else {
        cart.splice(index, 1);
        li.remove();
    }
}


document.getElementById("validate").addEventListener("click", displayAllTotals);


function getTotal(){
    let total = 0
    cart.forEach( (item) => 
        total += item.price
    )
    return total
}


function displayAllTotals() {
    if (displayTotalElement.style.display === "none") {
        displayTotalElement.style.display = "block";
    }
    displayTotal()
    displayReducedTotal()
}



function displayTotal() {
    total = getTotal();
    displayTotalElement.innerHTML = `Total : ${total}€`
}



function displayReducedTotal() {
    let { newCart, reducedTotal } = getCheapestCart()
    let ul = document.getElementById("reductionsDetails")
    document.getElementById("calcul").innerHTML = "Calcul de vos réductions...";
    for (let i = 0; i < newCart.length; i++) {
        console.log(newCart[i])
        const li = document.createElement("li");
        li.innerHTML = `${newCart[i].title}, ${newCart[i].price}€`;
        ul.appendChild(li)
    }
    // console.log("vous économisez ",saved, " sur un total de ", total, "et payez donc", newTotal, "€." )
    document.getElementById("displayReducedTotalElement").innerHTML = `Total avec les réductions: ${reducedTotal.toFixed(2)}€`
}



// function getReducedTotal()


function getCheapestCart() {
    let { newCart, reducedTotal } = applyReduce1();
    const reducedTotal2 = applyReduce2(reducedTotal);
    console.log(reducedTotal%100)


    if ((reducedTotal%100) == 0) {
        const reducedTotal3 = applyReduce3(reducedTotal2)
        console.log("total avec réduction dans getCheapestCart():",reducedTotal2)
        console.log("cart avec réduction1: ",newCart);
        return reducedTotal3 
    } else {
        console.log("total avec réduction dans getCheapestCart():",reducedTotal2)
        console.log("cart avec réduction1: ",newCart);
        return { newCart, reducedTotal: reducedTotal2 }
    }
}


function applyReduce1() {
    console.log("verif si reducedTotal ets bien globale :", reducedTotal)
    const percentage = offers.offers[0].value / 100; //on récupère la valeur correspondant à 0,05
    const newCart = cart.map((book) => ({
        ...book, 
        price: parseInt((book.price * (1-percentage)).toFixed(2))
    }));
    
    newCart.forEach( (book) => reducedTotal += book.price)
    console.log("total avec réduction dans applyReduce1():",reducedTotal)
    return { newCart, reducedTotal }
}



function applyReduce2(total) {
    const minus = offers.offers[1].value / 100; 
    const newTotal = total * (1 - minus)
    return newTotal
}


function applyReduce3(total) {
    const slice = offers.offers[2]
    const saved = ((total-(total%slice.sliceValue))/slice.sliceValue)* slice.value;
    let newTotal = total-saved
    return newTotal
}







// function displayReductionsDetails() {
    //     let displayReducedTotal = document.getElementById("displayReducedTotal");
    //     displayReducedTotal = `Voici le détail de vos réductions. 
    //     <\n> 5 % de réduction sur chaque livre. 
    //     <\n> 15% de réduction sur le panier total.
    //     <\n> Tous les 100€, 12€ sont déduits..`
    // }



// FAIRE EXEMPLE 2 livres 30 et 35€ = panier de 50€ avec réductions

/* offers : 
- 5 % de réduction sur chaque livre
- 15% de réduction sur le panier total
- Tous les 100€, 12€ sont déduits. */
