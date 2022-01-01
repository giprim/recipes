import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Api } from './endpoint';

const Home = () => {
  const [recipes, setRecipes] = useState(null);
  useEffect(() => {
    Api.get('/3')
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((e) => console.log({ e }));
  }, []);

  console.log(recipes);
  return (
    <View>
      <Text>Welcome to recipes</Text>
    </View>
  );
};

export default Home;
