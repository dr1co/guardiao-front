import axios from 'axios';

// http://localhost:4000
const url = process.env.EXPO_PUBLIC_API_ADDRESS;

const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": 'application/json'
  },
  
});

export default axiosInstance;

