export function displayBookCard(state, book, button){
    if (state === false) {
        document.getElementById("selectedBookTitle").innerHTML = "Ce livre n'est pas disponible.";
    } else {
        document.getElementById("selectedBookTitle").innerHTML = `<h3>${book.title}</h3>`;
        button.style.display = "block";
    }
}
