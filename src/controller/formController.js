 //J'ai déplacé l'écouteur d'evenement du bouton du formulaire dans le coprs du script.js
 //pour des raisons d'accessibilité à ce bouton. J ene sais


export function getSelectedBook(book, list) {
    console.log("soumis")
    const inputValue = document.getElementById("inputValue").value.toLowerCase();

    for (let i = 0; i < list.length; i++) {
        let loweredBook = list[i].title.toLowerCase()
        if (inputValue === loweredBook) {
            book = list[i]
            console.log("book : ",book)
            return book
        }
    }
}