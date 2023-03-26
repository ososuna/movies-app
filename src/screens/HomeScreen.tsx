import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import moviesApi from '../api/moviesApi';

export const HomeScreen = () => {

  useEffect(() => {
    moviesApi.get('/now_playing').then(resp => {
      console.log(resp.data);
    });
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
