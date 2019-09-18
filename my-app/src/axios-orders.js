import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-58e52.firebaseio.com/'
});

export default instance;