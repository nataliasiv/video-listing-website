import axios from 'axios';

// TODO ADD ALL API CALLS

export default {
    data() {
        return {
          upcoming: []
        }
    },
    getUpcoming() {
        return upcoming
    }
}

let upcoming = axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=13aeb3fe065f4b10d4cacbafd800335b&language=en-US&page=1&append_to_response=images,videos')