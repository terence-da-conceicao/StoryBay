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


function getBook() {
    const inputValue = document.getElementById("inputValue").value.toLowerCase();
    let isBookAvailable = false;
    console.log(inputValue);

    for (let i = 0; i < booksList.length; i++) {
        let loweredBook = booksList[i].title.toLowerCase()
        if (inputValue === loweredBook) {
            isBookAvailable = true;
            document.getElementById("bookChoice").innerHTML = `Vous avez choisi ${booksList[i].title}.`;
            console.log("isBookAvailable : ", isBookAvailable);
            return inputValue
        }
    }
    if (!isBookAvailable) {
        document.getElementById("bookChoice").innerHTML = `Ce livre n'est pas disponible.`;
        console.log("isBookAvailable : ", isBookAvailable);
    }
}



