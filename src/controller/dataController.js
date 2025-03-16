
/* cette fonction sert à récupérer les informatiosn du json et à les
parser pour les mettre dans une variable et les exploiter en JS. */



// async function fetchData(data) {
//     try {
//         const response = await fetch(data);
//         if (!response.ok) {
//             throw new Error(`Response status : ${response.status}`);
//         }
//         let jsonData = await response.json();
//         return jsonData;
//     } catch(error) {
//         console.error(error.message);
//     }
// }















// export async function getData(data) {
//     let dataLink = `https://www.googleapis.com/books/v1/volumes?q=${data}`
//     console.log(dataLink)
//     return dataLink;
// }

// async function fetchBook(query) {
//     const apiKey = 'AIzaSyBPdBv_E3r935r0ANhlGSbbP9fAqUMdgeQ';
//     const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         return data
//     } catch(error) {
//         console.error("Impossible de trouver ce livre");
//         return;
//     }
// }

// export async function getBook(data) {
//     data = fetchBook()
// }




async function fetchData(query) {

    const apiKey = 'AIzaSyBPdBv_E3r935r0ANhlGSbbP9fAqUMdgeQ';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;
    try {
        const response = await fetch(url);
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
    let book = await fetchData(data);
    return book
}

