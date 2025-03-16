 //J'ai déplacé l'écouteur d'evenement du bouton du formulaire dans le coprs du script.js
 //pour des raisons d'accessibilité à ce bouton. J ene sais


//version json
// export function getSelectedBook(book, list) {

//     const inputValue = document.getElementById("inputValue").value.toLowerCase();

//     for (let i = 0; i < list.length; i++) {
//         let loweredBook = list[i].title.toLowerCase()
//         if (inputValue === loweredBook) {
//             book = list[i]
//             return book
//         }
//     }
// }



export function getSearchedBook() {

    let inputValue = document.getElementById("inputValue").value.toLowerCase();
    let searchedValue = "";

    //on itère sur la string donnée par le user pour transformer les espaces en "+"
    for (let i = 0; i < inputValue.length; i++) {
        let letter = inputValue[i];
        if (letter != " ") {
            searchedValue += letter;
        } else {
            letter = "+";
            searchedValue += letter;
        } //gérer le cas où on tape plsieurs espaces à la suite
    }
    console.log("searchedValue :", searchedValue)
    return searchedValue
}





//     for (let i = 0; i < list.length; i++) {
//         let loweredBook = list[i].title.toLowerCase()
//         if (inputValue === loweredBook) {
//             book = list[i]
//             return book
//         }
//     }
// }
