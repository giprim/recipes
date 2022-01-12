import { useRoute } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import { Caption, Headline } from 'react-native-paper';

const Recipe = () => {
  const { params }: any = useRoute();

  return (
    <ScrollView>
      {params && (
        <View style={{ padding: 12, paddingBottom: 54 }}>
          <Image source={{ uri: params.image }} style={styles.image} />
          <Headline>{params.title}</Headline>
          <View>
            <Caption style={styles.caption}>Ingredients</Caption>
            <FlatList
              data={params.ingredients}
              renderItem={({ item }) => (
                <Text style={styles.text}>{`\u2022 ${item}`}</Text>
              )}
              keyExtractor={(item) => item.split(' ').join('')}
            />
          </View>
          {params.times && (
            <View>
              <Caption style={styles.caption}>Times</Caption>
              <FlatList
                data={params.times}
                renderItem={({ item }) => (
                  <Text style={styles.text}>{`\u2022 ${item}`}</Text>
                )}
                keyExtractor={(item, idx) => item.split(' ').join('') + idx}
              />
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default Recipe;

const styles = StyleSheet.create({
  caption: {
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 18,
    paddingBottom: 5,
    color: 'black',
  },
  image: {
    width: '100%',
    height: 220,
  },
  text: {
    color: 'gray',
    lineHeight: 30,
    fontSize: 14,
  },
});
