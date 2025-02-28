const booksList = [
    {title: "Henri Pottier 1", price: 10},
    {title: "Henri Pottier 2", price: 10},
    {title: "Henri Pottier 3", price: 10},
    {title: "Henri Pottier 4", price: 10},
    {title: "Henri Pottier 5", price: 10}
]

const datalist = document.getElementById("books");
let isBookAvailable = false;
let chosenBook;
let cart = [];


booksList.forEach(book => {
    const option = document.createElement("option");
    option.value = book.title;
    datalist.appendChild(option)
});


document.querySelector("form").addEventListener("submit", getBook);


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

function addToCart() {
    cart.push(chosenBook);
    console.log("cart:",cart)
    console.log(`${chosenBook.title}, ${chosenBook.price}$`)
    const li = document.createElement("li");
    li.innerHTML = `${chosenBook.title}, ${chosenBook.price}`;
    displayCart.appendChild(li);
}

