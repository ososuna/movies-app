/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {

  const { moviesNowPlaying, isLoading } = useMovies();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator size={30} color="red" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
      <Text>{ moviesNowPlaying[1]?.title }</Text>
    </View>
  );
};
