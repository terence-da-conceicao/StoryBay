export function displayBookCard(state, book, button){
    const bookCard = document.getElementById("buyBook");
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
        document.getElementById("buyBook").style.display = "none";

    } else {
            bookCard.style.display = "block";
            title.innerHTML = `${book.title}`;
            price.innerHTML = `${book.price}€`;
            coverImage.src = book.cover
            coverImage.alt = `couverture de ${book.title}`;
            button.style.display = "block";


            bookCard.classList.remove("hidden");

            if (errorCard) {
                errorCard.remove(); // Supprime le message d'erreur
            }
    }
}
