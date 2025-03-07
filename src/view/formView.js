
//ça display une liste d'options tirées de booksList (dans script.js)
export function createDatalist(list) {
    if (!list) {
        console.log(`${list} n'existe pas`)
        return
    } else {
        const datalist = document.getElementById("books");
        for (const book in list) {
            const option = document.createElement("option");
            option.value = list[book].title;
            datalist.appendChild(option);
        };
    }
}