export function getSearchedBook() {
    let inputValue = document.getElementById("inputValue").value.toLowerCase();
    let searchedValue = "";

    for (let i = 0; i < inputValue.length; i++) {
        let letter = inputValue[i];
        if (letter != " ") {
            searchedValue += letter;
        } else {
            letter = "+";
            searchedValue += letter;
        }
    }
    return searchedValue
}