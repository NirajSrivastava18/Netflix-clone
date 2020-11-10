const API_KEY = "dc577570b9e4f5344430e6d3830d7867";

const requests = {
fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-IN`,
fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-IN`,
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests;