import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Home';
import { Provider as PaperProvider } from 'react-native-paper';
import AuthScreen from './src/Auth';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* <Home /> */}
        <AuthScreen />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
    backgroundColor: '#ffffff',
  },
});
