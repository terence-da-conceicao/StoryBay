export function displayBookCard(state, book, button){
    if (state === false) {
        document.getElementById("selectedBookTitle").innerHTML = "Ce livre n'est pas disponible.";
    } else {
        document.getElementById("selectedBookTitle").innerHTML = `<h3>${book.title}</h3>`;
        document.getElementById("price").innerHTML = `<h3>${book.price}</h3>`;
        const coverImage = document.getElementById("bookCover");
        coverImage.src = book.cover
        console.log(document.getElementById("bookCover").src)
        coverImage.alt = `couverture de ${book.title}`;
        coverImage.classList.add('book-cover');
        button.style.display = "block";
    }
}
