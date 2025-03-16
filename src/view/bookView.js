export function displayBookCard(state, book, button){
    const bookCard = document.getElementById("bookCard");
    const title = document.getElementById("selectedBookTitle");
    const coverImage = document.getElementById("bookCover");
    const price = document.getElementById("price");
    const errorCard = document.getElementById("errorCard");

    if (state === false) {
        if (!errorCard) {
            const newErrorCard = document.createElement("span");
            newErrorCard.id = "errorCard";
            newErrorCard.innerHTML = "Ce livre n'est pas disponible."
            newErrorCard.classList.add("p-4")
            document.getElementById("selection").appendChild(newErrorCard)
        }
        document.getElementById("bookCard").style.display = "none";

    } else {
            bookCard.style.display = "block";
            title.innerHTML = book.items[0].volumeInfo.title;
            // title.innerHTML = `${book.items.volumeInfo.title.value}`;
            //rajouter l'auteur et la date de parution
            price.innerHTML = `${book.items[0].saleInfo.listPrice.amount}€`;
            coverImage.src = book.items[0].volumeInfo.imageLinks.thumbnail;
            coverImage.alt = `couverture de ${book.items[0].volumeInfo.title}`;
            button.style.display = "block";


            bookCard.classList.remove("hidden");

            if (errorCard) {
                errorCard.remove(); // Supprime le message d'erreur
            }
    }
}
