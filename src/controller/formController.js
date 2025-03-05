import { booksList, isBookAvailable, selectedBook } from "../script.js"


//gérer l'import de booksList pour les options de livres








//recevoir le choix de l'utilisateur, vérifier s'il est dans la liste
//de livres.
//Si oui:
// - isBookAvailable (état) = true
// - selectedBook (état) prend la valeur du livre reçu par l'input
// - la fonction retourne le titre du livre.
export function getBook(event) {
    event.preventDefault()
    const inputValue = document.getElementById("inputValue").value.toLowerCase();

    for (let i = 0; i < booksList.length; i++) {
        let loweredBook = booksList[i].title.toLowerCase()
        if (inputValue === loweredBook) {
            isBookAvailable = true;
            selectedBook = booksList[i];
            console.log(selectedBook)
            return booksList[i].title
        
        }
    }
    if (!isBookAvailable) {
        document.getElementById("bookChoice").innerHTML = "Ce livre n'est pas disponible.";
    }
}
