const searchInput = document.getElementById('searchInput');
const yearInput = document.getElementById('yearInput');
const genreSelect = document.getElementById('genres');
const searchButton = document.getElementById('searchButton');
const movieResults = document.getElementById('movieResults');
const noResults = document.getElementById('noResults');

const API_KEY = 'cbc54884';
const API_URL = 'http://www.omdbapi.com/';

searchButton.addEventListener('click', () => performSearch());
searchYearButton.addEventListener('click', () => performSearch('year'));

async function performSearch(searchType = 'general') {
    const searchTerm = searchInput.value.trim();
    const year = yearInput.value.trim();
    const genre = genreSelect.value;

    movieResults.innerHTML = '';
    noResults.style.display = 'none';

    let url = `${API_URL}?apikey=${API_KEY}`;

    if (searchType === 'general' && searchTerm) {
        url += `&s=${encodeURIComponent(searchTerm)}`;
    } else if (searchType === 'year' && year) {
        url += `&s=${encodeURIComponent(year)}&y=${year}`;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('No Results');
        }
        const data = await response.json();

        let filteredResults = data.Search || [];
        if (genre && genre !== 'All') {
            filteredResults = filteredResults.filter(movie => movie.Type === genre.toLowerCase());
        }
        
        if (data.Search && data.Search.length > 0) {
            data.Search.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');
                movieCard.innerHTML = `
                    <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder-image.jpg'}" alt="${movie.Title} Poster">
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
    } catch (error) {
        console.error('Search error:', error);
        noResults.textContent = 'An error occurred during the search. Please try again.';
        noResults.style.display = 'block';
    }
}