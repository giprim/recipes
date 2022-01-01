import React, { useState } from 'react';
import { View, StyleSheet, GestureResponderEvent } from 'react-native';
import { TextInput, Headline, Button, Text } from 'react-native-paper';

const AuthScreen = () => {
  const [isPasswordVisible, setPasswordVisibility] = useState(true);
  const [loading, setLoading] = useState(false);

  const showPassword = (e: GestureResponderEvent) => {
    e.preventDefault();
    setPasswordVisibility((prev) => !prev);
  };

  const handleLogin = () => {
    setLoading((prev) => !prev);
  };
  return (
    <View style={styles.authWrapper}>
      <View style={styles.box1}>
        <Headline> Login</Headline>
      </View>
      <View style={styles.box2}>
        <View style={styles.inputWrap}>
          <TextInput
            label="Username"
            autoComplete
            placeholder="Enter username"
          />
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            label="Password"
            secureTextEntry={isPasswordVisible}
            autoComplete={false}
            placeholder="********"
            right={
              <TextInput.Icon
                name="eye"
                onPressIn={showPassword}
                onPressOut={showPassword}
              />
            }
          />
        </View>
        <View style={styles.inputWrap}>
          <Button
            onPress={handleLogin}
            icon={'login'}
            mode="contained"
            style={styles.btn}
            loading={loading}>
            Go
          </Button>
        </View>
        <View style={styles.box3}>
          <Text onPressOut={() => {}} onPressIn={() => {}}>
            Create an account
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  authWrapper: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  },
  box1: {
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'flex-end',
  },
  box2: {
    flex: 3,
  },
  box3: {
    paddingVertical: 12,
    marginTop: 16,
  },
  btn: {
    paddingVertical: 10,
  },
  inputWrap: {
    marginTop: 12,
  },
});
