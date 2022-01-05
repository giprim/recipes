import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { Headline } from 'react-native-paper';

const Recipe = () => {
  const { params }: any = useRoute();

  return <View>{params && <Headline>{params.title}</Headline>}</View>;
};

export default Recipe;
