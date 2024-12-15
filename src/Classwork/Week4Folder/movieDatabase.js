const searchInput = document.getElementById('searchInput');
const movieResults = document.getElementById('movieResults');
const noResults = document.getElementById('noResults');

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', performSearch);

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

const API_KEY = 'cbc54884';
const API_URL = 'http://www.omdbapi.com/';

function performSearch() {
    const searchTerm = searchInput.value.trim();
    movieResults.innerHTML = '';
    noResults.style.display = 'none';

    if (searchTerm === '') {
        return;
    }

    const url = `${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('No Results');
            }
            return response.json();
        })
        .then(data => {
            if (data.Search && data.Search.length > 0) {
                data.Search.forEach(movie => {
                    const movieCard = document.createElement('div');
                    movieCard.classList.add('movie-card');

                    movieCard.innerHTML = `
                        <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder-image.jpg'}" 
                             alt="${movie.Title} Poster">
                        <div class="movie-info">
                            <h3>${movie.Title}</h3>
                            <p>Year: ${movie.Year}</p>
                            <p>Type: ${movie.Type}</p>
                        </div>
                    `;

                    movieResults.appendChild(movieCard);
                });
            } else {
                noResults.textContent = 'No Results. Try another search.';
                noResults.style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Search error:', error);
            noResults.textContent = 'An error occurred during the search. Please try again.';
            noResults.style.display = 'block';
        });
}