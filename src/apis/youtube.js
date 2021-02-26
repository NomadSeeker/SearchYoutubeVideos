import axios from 'axios';

const KEY = 'AIzaSyB6apP9TM83l7RT3MAyBVUOenQkADuTRJI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})