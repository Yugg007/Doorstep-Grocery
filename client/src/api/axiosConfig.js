// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://your-backend-base-url/api',  // Replace with your actual backend base URL
  headers: {
    'Content-Type': 'application/json',
    // You can add other headers here if needed
  },
});

export default instance;
 