let booksList 
let offers
let isBookAvailable = false;
let chosenBook;
let cart = [];
let cartText = document.getElementById("cartText");
const viewCart = document.getElementById("cart");





async function fetchData(data) {
    try {
        const response = await fetch(data);
        if (!response.ok) {
            throw new Error(`Response status : ${response.status}`);
        }
        let jsonData = await response.json();
        return jsonData;
    } catch(error) {
        console.error(error.message);
    }
}


async function getData() {
    offers = await fetchData('offers.json');
    booksList = await fetchData('books.json');
    createDatalist();
}
getData()


async function createDatalist() {
    const datalist = document.getElementById("books");
        for (book in booksList) {
        const option = document.createElement("option");
        option.value = booksList[book].title;
        datalist.appendChild(option);
    };
}



document.querySelector("form").addEventListener("submit", getBook);

function getBook(event) {
    event.preventDefault()
    const inputValue = document.getElementById("inputValue").value.toLowerCase();

    for (let i = 0; i < booksList.length; i++) {
        let loweredBook = booksList[i].title.toLowerCase()
        if (inputValue === loweredBook) {
            isBookAvailable = true;
            chosenBook = booksList[i];
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
    console.log("cart : ",cart)
    displayCart()
})

function displayCart() {
    if (viewCart.style.display === "none") {
        viewCart.style.display = "block";
    }
    displayItem()
}

function displayItem() {
    const li = document.createElement("li");
    li.innerHTML = `${chosenBook.title}, ${chosenBook.price}`;

    const remove = document.createElement("button");
    remove.innerText = 'Retirer';
    remove.addEventListener("click", (event) => deleteItem(event, chosenBook)); // Passe l'event et le livre

    li.appendChild(remove);
    viewCart.appendChild(li);
}

function deleteItem(event, bookToRemove) {
    const li = event.target.closest("li"); // Récupère le <li> contenant le bouton
    const index = cart.indexOf(bookToRemove); // Trouve l'index dans le tableau

    if (index !== -1) {
        cart.splice(index, 1); // Supprime du tableau
        li.remove(); // Supprime du DOM
        console.log("Nouveau panier :", cart);
    }
}

/* offers : 
- 5 % de réduction sur chaque livre
- 15% de réduction sur le panier total
- Tous les 100€, 12€ sont déduits.


- mettre en place un bouton pour valider le panier. Cela affiche le 
prix total sans réductions,
ainsi qu'un text avec els réductions, et le prix avec réduction! Et un petit bouton
acheter pour la route.

ce serait bien de faire 2 pages, une pour choisir ses livres et une pour le panier */



