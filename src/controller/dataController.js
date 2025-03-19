async function fetchOffers(data) {
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




export async function getOffers(data) {
    let offers = await fetchOffers(data);
    return offers
}



async function fetchData(query) {
    const apiKey = `VOTRE_CLE_API_ICI`;
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
    let allDatas = await fetchData(data);
    let bookDatas = allDatas.items[0];
    let title = bookDatas.volumeInfo.title || "titre inconnu";
    let author =  bookDatas.volumeInfo.authors || "auteur inconnu";
    let cover = bookDatas.volumeInfo.imageLinks?.thumbnail || "../assets/noCover.png";
    let price = bookDatas.saleInfo.listPrice?.amount || 0 ;

    let book = {
        title : `${title}`,
        author: `${author}`,
        cover: `${cover}`,
        price: price,
    }
    return book
}