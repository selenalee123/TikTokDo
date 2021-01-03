import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import Home from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Page content</Text>
      <Home/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
