const searchBox = document.getElementById('searchBox');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', performSearch);

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
//no clue what to put here yet, just know i need to search somehow!
}
searchInput.addEventListener('keydown', handleKeyPress);
