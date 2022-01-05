import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import { ActivityIndicator, Card } from 'react-native-paper';
import { Api } from './endpoint';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigation = useNavigation();

  const fetchRecipes = async () =>
    Api.get('/10')
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((e) => console.log({ e }));

  useEffect(() => {
    fetchRecipes();
  }, []);

  const showMore = (item: any) => {
    //   @ts-ignore
    navigation.navigate('Recipe', item);
  };

  const CardComponent = ({ item }: any) => {
    return (
      <TouchableOpacity activeOpacity={0.75} onPress={() => showMore(item)}>
        <Card>
          <Card.Title title={item.title} subtitle="Card Subtitle" />
          <Card.Cover
            source={{ uri: item.image ?? 'https://picsum.photos/700' }}
          />
        </Card>
      </TouchableOpacity>
    );
  };

  const handleRefresh = () => {
    setRefresh(true);
    fetchRecipes().then(() => setRefresh(false));
  };
  return (
    <View style={styles.container}>
      {recipes.length ? (
        <FlatList
          data={recipes}
          refreshing={refresh}
          onRefresh={handleRefresh}
          renderItem={CardComponent}
          keyExtractor={(item: any) => item.id}
          ItemSeparatorComponent={() => <View style={styles.box} />}
          ListEmptyComponent={() => <Text> No content found</Text>}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    paddingVertical: 25,
    backgroundColor: 'white',
  },
  box: {
    height: 20,
  },
});
