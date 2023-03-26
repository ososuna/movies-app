import axios from 'axios';

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'b27105b35832e833aa33e4cc3fa9d6fb',
    language: 'en-US',
  },
});

export default moviesApi;
