import { useNavigation } from '@react-navigation/native';
import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Api } from './endpoint';

const PurseView = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    return Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View style={{ ...props.style, opacity: fadeAnim }}>
      {props.children}
    </Animated.View>
  );
};

const WelcomeScreen = () => {
  const navigate = useNavigation();
  //@ts-ignore
  const timeOut = () => setTimeout(() => navigate.navigate('Login', {}), 6000);

  useEffect(() => {
    timeOut();
    return clearTimeout(timeOut());
  }, []);
  return (
    <PurseView style={styles.homeContainer}>
      <Text style={styles.text}>Welcome to recipes</Text>
    </PurseView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
