import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import Home from './src/screens/Home';
import Post from './src/components/Post';
import 'react-native-gesture-handler' ;
import RootNavigation from './src/navigation';
import HomeBottomTabNavigator from './src/navigation';
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)



const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeBottomTabNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
