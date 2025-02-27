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
    const inputValue = document.getElementById("inputValue").value;
    let isBookAvailable = false;
    console.log(inputValue);
    for (let i = 0; i < booksList.length; i++) {
        if (inputValue === booksList[i].title) {
            isBookAvailable = true;
            document.getElementById("bookChoice").innerHTML = `Vous avez choisi ${inputValue}.`;
            console.log("isBookAvailable : ", isBookAvailable);
            return inputValue
        }
    }
    if (!isBookAvailable) {
        document.getElementById("bookChoice").innerHTML = `Ce livre n'est pas disponible.`;
        console.log("isBookAvailable : ", isBookAvailable);
    }
}



