let booksList
let offers


export async function fetchData(data) {
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


async function getData() {
    offers = await fetchData('/src/data/offers.json');
    booksList = await fetchData('src/data/books.json');
}


await getData()


export function useData() {
    
    return { booksList, offers}
}