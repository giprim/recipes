import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
} from 'react-native';
import { TextInput, Headline, Button, ToggleButton } from 'react-native-paper';

const initLogin = {
  username: '',
  password: '',
};

const Login = () => {
  const [isPasswordVisible, setPasswordVisibility] = useState(true);
  const [loginDetail, setLoginDetail] = useState(initLogin);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const showPassword = (e: GestureResponderEvent) => {
    e.preventDefault();
    setPasswordVisibility((prev) => !prev);
  };

  const handleLogin = () => {
    setLoading(true);
    if (loginDetail.password && loginDetail.username) {
      // submission & verification logic
      setLoading(false);
      //@ts-ignore
      navigation.navigate('Home', {});
    }
    setLoading(false);
  };
  // @ts-ignore
  useEffect(() => inputRef1.current.focus(), []);

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
            value={loginDetail.username}
            returnKeyLabel="next"
            returnKeyType="next"
            blurOnSubmit={false}
            ref={inputRef1}
            // @ts-ignore
            onSubmitEditing={() => inputRef2.current.focus()}
            onChangeText={(e) =>
              setLoginDetail((prev) => ({ ...prev, username: e }))
            }
          />
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            ref={inputRef2}
            label="Password"
            secureTextEntry={isPasswordVisible}
            autoComplete={false}
            placeholder="********"
            returnKeyLabel="Login"
            returnKeyType="go"
            blurOnSubmit={false}
            right={
              <TextInput.Icon
                name="eye"
                onPressIn={showPassword}
                onPressOut={showPassword}
              />
            }
            value={loginDetail.password}
            onChangeText={(e) =>
              setLoginDetail((prev) => ({ ...prev, password: e }))
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
      </View>
    </View>
  );
};

const SignIn = () => {
  const [signin, setSignIn] = useState({
    fullname: '',
    username: '',
    password: '',
  });
  const [isPasswordVisible, setPasswordVisibility] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const showPassword = (e: GestureResponderEvent) => {
    e.preventDefault();
    setPasswordVisibility((prev) => !prev);
  };
  const handleSignin = () => {
    setLoading(true);
    if (signin.password && signin.username && signin.fullname) {
      // submission & verification logic
      setLoading(false);
      //@ts-ignore
      navigation.navigate('Home', {});
    }
    setLoading(false);
  };
  return (
    <View style={styles.authWrapper}>
      <View style={styles.box1}>
        <Headline>Sign in</Headline>
      </View>
      <View style={styles.box2}>
        <View style={styles.inputWrap}>
          <TextInput
            label="Full name"
            autoComplete
            placeholder="Enter full name"
            value={signin.fullname}
            returnKeyLabel="next"
            returnKeyType="next"
            blurOnSubmit={false}
            ref={inputRef1}
            // @ts-ignore
            onSubmitEditing={() => inputRef2.current.focus()}
            onChangeText={(e) =>
              setSignIn((prev) => ({ ...prev, fullname: e }))
            }
          />
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            label="Username"
            autoComplete
            placeholder="Enter username"
            value={signin.username}
            returnKeyLabel="next"
            returnKeyType="next"
            blurOnSubmit={false}
            ref={inputRef2}
            // @ts-ignore
            onSubmitEditing={() => inputRef3.current.focus()}
            onChangeText={(e) =>
              setSignIn((prev) => ({ ...prev, username: e }))
            }
          />
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            ref={inputRef3}
            label="Password"
            secureTextEntry={isPasswordVisible}
            autoComplete={false}
            placeholder="********"
            returnKeyLabel="Login"
            returnKeyType="go"
            blurOnSubmit={false}
            right={
              <TextInput.Icon
                name="eye"
                onPressIn={showPassword}
                onPressOut={showPassword}
              />
            }
            value={signin.password}
            onChangeText={(e) =>
              setSignIn((prev) => ({ ...prev, password: e }))
            }
          />
        </View>
        <View style={styles.inputWrap}>
          <Button
            onPress={handleSignin}
            icon={'login'}
            mode="contained"
            style={styles.btn}
            loading={loading}>
            <Text>Sign in</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const AuthScreen = () => {
  const [isLoginView, setLoginView] = useState('true');
  return (
    <View style={{ height: '100%' }}>
      <ToggleButton.Row
        style={{ width: 100 }}
        onValueChange={(value) => setLoginView(value)}
        value={isLoginView}>
        <ToggleButton icon="format-align-left" value={'true'}>
          <Text>Login</Text>
        </ToggleButton>
        <ToggleButton icon="login" value={'false'}>
          <Text>Sign in</Text>
        </ToggleButton>
      </ToggleButton.Row>
      {isLoginView === 'true' ? <Login /> : <SignIn />}
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
