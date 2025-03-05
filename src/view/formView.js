export function displayBookState(state) {
    if (!state) {
        document.getElementById("selectedBookTitle").innerHTML = "Ce livre n'est pas disponible.";
    }
}