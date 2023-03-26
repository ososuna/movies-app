/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {

  const { moviesNowPlaying, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator size={30} color="red" />
      </View>
    );
  }

  return (
    <View style={{ marginTop: top + 20 }}>
      <MoviePoster
        movie={moviesNowPlaying[2]}
      />
    </View>
  );
};
