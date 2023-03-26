import { useEffect, useState } from 'react';
import movieApi from '../api/movieApi';
import { Movie, MovieNowPlaying } from '../interfaces/movie';

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [ moviesNowPlaying, setMoviesNowPlaying ] = useState<Movie[]>([]);

  const getMoviesNowPlaying = async () => {
    const { data } = await movieApi.get<MovieNowPlaying>('/now_playing');
    setMoviesNowPlaying(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMoviesNowPlaying();
  }, []);

  return {
    isLoading,
    moviesNowPlaying,
  };
};
