/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Movie } from '../interfaces/movie';

interface Props {
  movie: Movie;
}

export const MoviePoster = ({ movie }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  console.log(movie.poster_path);

  return (
    <View style={{
      width: 300,
      height: 420,
    }}>
      <View style={ styles.imageContainer }>
        <Image
          source={{ uri }}
          style={ styles.image }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    borderRadius: 18,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
  },
});
