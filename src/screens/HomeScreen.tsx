import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import movieApi from '../api/movieApi';
import { MovieNowPlaying } from '../interfaces/movie';

export const HomeScreen = () => {

  useEffect(() => {
    movieApi.get<MovieNowPlaying>('/now_playing').then(resp => {
      console.log(resp.data.results[1].title);
    });
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
