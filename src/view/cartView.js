//affiche le panier sans réduction (change le display)
export function displayCart(book) {
    console.log("définition displayCart dans cartView")
    const viewCart = document.getElementById("viewCart");

    if (viewCart.style.display === "none") {
        viewCart.style.display = "block";
    }
    displayItem(book)
}



//affiche chaque ligne du panier sans réduction
export function displayItem(book) {
    const li = document.createElement("li");
    li.innerHTML = `${book.title}, ${book.price}€`;

    const remove = document.createElement("button");
    remove.innerText = 'Retirer';
    remove.id = "remove"
    remove.addEventListener("click", (event) => deleteItem(event, book));
    li.appendChild(remove);

    items.appendChild(li);
}


// //créer un bouton pour effacer une ligne et retirer l'article du panier
// function deleteItem(event, bookToRemove) {
//     const li = event.target.closest("li");
//     const index = cart.indexOf(bookToRemove);

//     if (index < -1 || index > cart.length-1) {
//         console.log("problème d'index")
//     } else {
//         cart.splice(index, 1);
//         li.remove();
//     }
// }
