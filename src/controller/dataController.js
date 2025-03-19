



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

    const apiKey = 'AIzaSyBPdBv_E3r935r0ANhlGSbbP9fAqUMdgeQ'
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
    let title = bookDatas.volumeInfo.title;
    let author =  bookDatas.volumeInfo.authors;
    let cover = bookDatas.volumeInfo.imageLinks.thumbnail;
    let price = bookDatas.saleInfo.listPrice.amount;


    let book = {
        title : `${title}`, 
        author: `${author}`, 
        cover: `${cover}`,
        price: price
    }
    console.log("Infos du livre récupérées et mises dans l'objet book")

    return book
}





// {
//     "title": "Ti-Jean-Tête-d’Or",
//     "authors": [
//         "Melvin Gallant"
//     ],
//     "publisher": "Bouton d'or Acadie Inc.",
//     "publishedDate": "2011-05-21T00:00:00-04:00",
//     "description": "Ti-Jean repart à l’aventure sur la grande route, s’arrêtant de château en château pour y trouver du travail. Chaque nouvel emploi lui réserve des épreuves qui semblent insurmontables. Mais Ti-Jean sait faire preuve de courage, de débrouil¬lardise et de ruse. Ces qualités suffiront-elles pour qu’il vienne à bout de tous les obstacles qui se dressent sur son chemin ? Dans la lignée des autres contes de Ti-Jean, chacun des cinq chapitres de ce livre raconte un nouvel épisode trépidant dans la vie du jeune intrépide.",
//     "industryIdentifiers": [
//         {
//             "type": "ISBN_13",
//             "identifier": "9782896825677"
//         },
//         {
//             "type": "ISBN_10",
//             "identifier": "2896825673"
//         }
//     ],
//     "readingModes": {
//         "text": true,
//         "image": true
//     },
//     "pageCount": 74,
//     "printType": "BOOK",
//     "categories": [
//         "Juvenile Fiction"
//     ],
//     "maturityRating": "NOT_MATURE",
//     "allowAnonLogging": false,
//     "contentVersion": "0.1.1.0.preview.3",
//     "panelizationSummary": {
//         "containsEpubBubbles": false,
//         "containsImageBubbles": false
//     },
//     "imageLinks": {
//         "smallThumbnail": "http://books.google.com/books/content?id=ADMLEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//         "thumbnail": "http://books.google.com/books/content?id=ADMLEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//     },
//     "language": "fr",
//     "previewLink": "http://books.google.fr/books?id=ADMLEAAAQBAJ&pg=PT71&dq=ti&hl=&cd=1&source=gbs_api",
//     "infoLink": "https://play.google.com/store/books/details?id=ADMLEAAAQBAJ&source=gbs_api",
//     "canonicalVolumeLink": "https://play.google.com/store/books/details?id=ADMLEAAAQBAJ"
// }