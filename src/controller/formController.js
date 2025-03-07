 //J'ai déplacé l'écouteur d'evenement du bouton du formulaire dans le coprs du script.js
 //pour des raisons d'accessibilité à ce bouton. J ene sais

 async function fetchData(data) {
    try {
        const response = await fetch(data);
        if (!response.ok) {
            throw new Error(`Response status : ${response.status}`);
        }
        let jsonData = await response.json();
        return jsonData;
    } catch(error) {
        console.error(error.message);
    }
}


export async function getData(data) {
    let list = await fetchData(data);
    return list
}

export function getSelectedBook(book, list) {
    const inputValue = document.getElementById("inputValue").value.toLowerCase();

    for (let i = 0; i < list.length; i++) {
        let loweredBook = list[i].title.toLowerCase()
        if (inputValue === loweredBook) {
            book = list[i]
            return book
        }
    }
}