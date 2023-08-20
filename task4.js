//task4.html along with this file examp
function debounce(func, delay) {
    let timeoutId;
  
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
  
    timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
  
function debouncedSearch(query) {
    console.log("Searching for:", query);
}
  
const debouncedSearchHandler = debounce(debouncedSearch, 300);

document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.getElementById("search-input");
    inputElement.addEventListener("input", (event) => {
    debouncedSearchHandler(event.target.value);
    });
});
  
  
  
  
  
  
  
  