import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // <- Your Spring Boot backend
});

export default instance;

