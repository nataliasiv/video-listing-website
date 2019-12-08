import axios from 'axios';

// TODO ADD ALL API CALLS

export default {
    getLatest() {
        return latest
    }
}

let latest = axios
.get('https://api.themoviedb.org/3/movie/latest?api_key=13aeb3fe065f4b10d4cacbafd800335b')
.catch(error => { console.log('Error' + error) })