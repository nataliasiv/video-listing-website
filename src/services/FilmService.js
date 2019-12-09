import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/',
})

export default {
    getRecent() {
        return apiClient.get('upcoming?api_key=13aeb3fe065f4b10d4cacbafd800335b&language=en-US&page=1&append_to_response=images')
    },
    getDetails(id) {
        return apiClient.get(id + '?api_key=13aeb3fe065f4b10d4cacbafd800335b&append_to_response=videos,images')
    }
}