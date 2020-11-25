import axios from 'axios';

const instance = axios.create ({
    baseURL: "https://blog.cheesecakelabs.com/challenge/"
});


export default instance