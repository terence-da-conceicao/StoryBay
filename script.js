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
    let indexBook = cart.length-1;
    li.dataset.index = indexBook;
    li.innerHTML = `${chosenBook.title}, ${chosenBook.price}`;
    viewCart.appendChild(li);


    const remove = document.createElement("button");
    remove.innerText = 'Retirer';
    let removeButton = document.getElementById("removeId")
    removeButton.addEventListener("click", deleteItem);
    li.appendChild(remove)
}


function deleteItem(event) {
    const li = event.target.closest("li");
    const indexBook = parseInt(li.dataset.index);
    cart.splice(indexBook ,1)
    li.remove()
}

