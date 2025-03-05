export function displayBookState(state, book) {
    if (state === false) {
        document.getElementById("selectedBookTitle").innerHTML = "Ce livre n'est pas disponible.";
    } else {
        document.getElementById("selectedBookTitle").innerHTML =  book.title
    }
}