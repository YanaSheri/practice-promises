export default function fetchMovies(query, page = 1) {
    const KEY = '8a7432db37f5ff14bd102ef897a46bd5';
    const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
    return fetch(`${BASE_URL}api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}&page=${page}`)
        .then(response => {
            if (!response.ok) {

                throw new Error(response.status)
            }
            return response.json()
        }).catch(error => console.log(error));
};