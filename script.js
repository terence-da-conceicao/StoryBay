const booksList = [
    {title: "Henri Pottier 1", price: 10},
    {title: "Henri Pottier 2", price: 10},
    {title: "Henri Pottier 3", price: 10},
    {title: "Henri Pottier 4", price: 10},
    {title: "Henri Pottier 5", price: 10}
]

//on met le contenu de l'element HTML datalist (qui est vide) dans la variable datalist.
const datalist = document.getElementById("books");

booksList.forEach(book => {
    const option = document.createElement("option");
    option.value = book.title;
    datalist.appendChild(option)
});


// document.getElementById("inputValue").addEventListener("submit", getBook)

let isBookAvailable = false;
let chosenBook;
let cart = [];





function getBook(event) {
    event.preventDefault()
    const inputValue = document.getElementById("inputValue").value.toLowerCase();
    console.log(inputValue);

    for (let i = 0; i < booksList.length; i++) {
        let loweredBook = booksList[i].title.toLowerCase()
        if (inputValue === loweredBook) {
            isBookAvailable = true;
            chosenBook = booksList[i];
            console.log("isBookAvailable : ", isBookAvailable);
            createBookCard(chosenBook);
            return booksList[i].title
        }
    }
    if (!isBookAvailable) {
        document.getElementById("bookChoice").innerHTML = `Ce livre n'est pas disponible.`;
        console.log("isBookAvailable : ", isBookAvailable);
    }
}


function createBookCard(book){
    document.getElementById("bookChoice").innerHTML = `<h3>${book.title}</h1>`;
    document.getElementById("buyBook").style.display = "block";
}

const displayCart = document.getElementById("cart")

function addToCart(book) {
    book = chosenBook;
    cart.push(chosenBook);
    console.log("cart:",cart)
    const li = document.createElement("li");
    li.textContent = `${chosenBook.title}, ${chosenBook.price}`;
}

