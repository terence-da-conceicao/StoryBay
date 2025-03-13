export function displayBookCard(state, book, button){
    const coverImage = document.getElementById("bookCover");

    
    
    
    if (state === false) {
        const errorCard = document.createElement("span");
        errorCard.innerHTML = "Ce livre n'est pas disponible."
        errorCard.classList.add("p-4")
        document.getElementById("selection").appendChild(errorCard)
        document.getElementById("buyBook").style.display = "none";

        // document.getElementById("selectedBookTitle").innerHTML = "Ce livre n'est pas disponible.";
        // coverImage.style.display = "none";
    } else {

        document.getElementById("selectedBookTitle").innerHTML = `${book.title}`;
        document.getElementById("price").innerHTML = `${book.price}€`;
        
        coverImage.src = book.cover
        coverImage.classList.remove('hidden'); // Enlève la classe `hidden` pour l'afficher
        coverImage.classList.add('block');
        coverImage.style.display = "block";
        coverImage.alt = `couverture de ${book.title}`;
        coverImage.classList.add('book-cover');

        button.style.display = "block";
    }
}
