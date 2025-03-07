export function displayCart(book, cart) {
    const cartCard = document.getElementById("cartCard");
    const index = cart.indexOf(book);
    if (cartCard.style.display === "none") {
        cartCard.style.display = "block";
    }
    displayItemCard(book, cart, index)
}



export function displayItemCard(book, cart, index) {
    const li = document.createElement("li");
    displayItemInfos(li, book);
    displayItemRemoveButton(li, index, cart, book)
    items.appendChild(li);
}


function displayItemInfos(line, book) {
    line.innerHTML = `${book.title}, ${book.price}€`;
}


function displayItemRemoveButton(line, index, cart){
    const remove = document.createElement("button");
    remove.id = "remove"
    remove.innerText = 'Retirer';
    console.log("cart displayRemoveButton:", cart)

    // const li = event.target.closest("li");
    remove.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("cart eventListenerbutton", cart)
        gererDisparitionItem(line, index, cart);
    });
    line.appendChild(remove);
}


function gererDisparitionItem(line, index, cart) {
    console.log("cart gérerDisparitionItem:", cart)
    removeItem(line, index, cart);
    undisplayItem(line);
}



function removeItem(line, index, cart) {
    console.log(index)
    if (cart.length === 0) {
        console.log("cart est vide")
    } else if (index < -1 || index > cart.length-1) {
        console.log("problème d'index")
    } else {
        console.log("cart removeItem:", cart)
        console.log("index : ",index)
        console.log("cart[index]",cart[0])
        cart.splice(index, 1);
        line.remove();
    }
}


function undisplayItem(line) {
    line.remove();
    // const index = cart.indexOf(book);
}