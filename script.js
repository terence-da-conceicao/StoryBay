// const booksList = [
//     {title: "Henri Pottier 1", price: 10},
//     {title: "Henri Pottier 2", price: 10},
//     {title: "Henri Pottier 3", price: 10},
//     {title: "Henri Pottier 4", price: 10},
//     {title: "Henri Pottier 5", price: 10}
// ]





async function fetchData(data) {
    try {
        const response = await fetch(data);
        if (!response.ok) {
            throw new Error(`Response status : ${response.status}`);
        }
        let jsonData = await response.json()
        return jsonData;
    } catch(error) {
        console.error(error.message);
    }

   
}
let booksList 
let offers
async function useData() {
    offers = await fetchData('offers.json');
    booksList = await fetchData('books.json');
    createDatalist();
}

useData()



// async function fetchOffers(data) {
//     fetch(data)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => console.log(data))
//         .catch(error => console.error('Error fetching JSON : ', 
//     error));
// }
// let offers = fetchOffers('offers.json')
// console.log(offers)

// getData()


let isBookAvailable = false;
let chosenBook;
let cart = [];

async function createDatalist() {
    
    const datalist = document.getElementById("books");
    for (const book in booksList) {
        // console.log(booksList[book].title)
    // booksList.forEach(book => {
        const option = document.createElement("option");
        option.value = booksList[book].title;
        datalist.appendChild(option);
    }
}



document.querySelector("form").addEventListener("submit", getBook);


function getBook(event) {
    event.preventDefault()
    const inputValue = document.getElementById("inputValue").value.toLowerCase();
    console.log(inputValue);

    for (let i = 0; i < booksList.length; i++) {
        let loweredBook = booksList[i].title.toLowerCase()
        console.log(loweredBook)
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

