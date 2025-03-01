let booksList 
let offers
let isBookAvailable = false;
let chosenBook;
let cart = [];
let cartText = document.getElementById("cartText");
const viewCart = document.getElementById("viewCart");
let total = 0;




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


function displayCart() {
    if (viewCart.style.display === "none") {
        viewCart.style.display = "block";
    }
    displayItem()
}

function displayItem() {
    const li = document.createElement("li");
    li.innerHTML = `${chosenBook.title}, ${chosenBook.price}€`;

    const remove = document.createElement("button");
    remove.innerText = 'Retirer';
    remove.id = "remove"
    remove.addEventListener("click", (event) => deleteItem(event, chosenBook));
    li.appendChild(remove);

    items.appendChild(li);
}

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


document.getElementById("validate").addEventListener("click", goToTotal);

function goToTotal() {
    let displayTotal = document.getElementById("displayTotal");
    if (displayTotal.style.display === "none") {
        displayTotal.style.display = "block";
    }
    getTotal()
    displayTotal.innerHTML = `Total : ${total}€`
}

function getTotal(){
    total = 0
    console.log("cart : ", cart)
    cart.forEach( (item) => 
        total += item.price
    )
    console.log(total)
}




// FAIRE EXEMPLE 2 livres 30 et 35€ = panier de 50€ avec réductions

/* offers : 
- 5 % de réduction sur chaque livre
- 15% de réduction sur le panier total
- Tous les 100€, 12€ sont déduits.


- mettre en place un bouton pour valider le panier. Cela affiche le 
prix total sans réductions,
ainsi qu'un text avec els réductions, et le prix avec réduction! Et un petit bouton
acheter pour la route.

ce serait bien de faire 2 pages, une pour choisir ses livres et une pour le panier */



