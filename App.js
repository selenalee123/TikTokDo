import React from 'react';
import {StyleSheet, Text, SafeAreaView,View} from 'react-native';
import Home from './src/screens/Home';
import Post from './src/components/Post';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Page content</Text>
      <Post/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
