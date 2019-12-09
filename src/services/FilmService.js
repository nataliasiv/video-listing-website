import axios from 'axios';

export default {
    getRecent() {
        return recentFilms
    },
    getDetails() {
        return filmDetails
    }
}

let recentFilms = axios
.get('https://api.themoviedb.org/3/movie/upcoming?api_key=13aeb3fe065f4b10d4cacbafd800335b&language=en-US&page=1&append_to_response=images', 'https://api.themoviedb.org/3/movie/upcoming?api_key=13aeb3fe065f4b10d4cacbafd800335b&language=en-US&page=2&append_to_response=images')

let filmDetails = axios
.get('https://api.themoviedb.org/3/movie/550?api_key=13aeb3fe065f4b10d4cacbafd800335b&append_to_response=videos,images')