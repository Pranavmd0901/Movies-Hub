const API_KEY = '96046bd4f0c57e38002cd10c3696d4c8'; 
const BASE_URL = 'https://api.themoviedb.org/3';


export const getPopularMovies = async () => {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    const options = {
        method: 'GET'
    };

    const response = await fetch(url, options);
    const result = await response.json();
    return result.results;  
};


export const searchMovies = async (query) => {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1&include_adult=false`;

    const options = {
        method: 'GET'
    };

    const response = await fetch(url, options);
    const result = await response.json();
    return result.results;  
};




