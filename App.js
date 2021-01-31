import React, { useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Home from './src/screens/Home';
import Post from './src/components/Post';
import 'react-native-gesture-handler';
import RootNavigation from './src/navigation';
import HomeBottomTabNavigator from './src/navigation';
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)


import { Auth, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';

import { createUser } from './src/graphql/mutations';
import { getUser } from './src/graphql/queries';

const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
];

const getRandomImage = () => {
  return randomImages[Math.floor(Math.random() * randomImages.length)];
};


const App = () => {

  useEffect(() => {
    const fetchUser = async () => {
      // get currently authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      if (!userInfo) {
        return;
      }

      // check if THE user exist in database
      const getUserResponse = await API.graphql(
        graphqlOperation(getUser, {id: userInfo.attributes.sub}),
      );

      if (getUserResponse.data.getUser) {
        console.log('User already exists in database');
        return;
      }

      // if it doesn't (it's newly registered user)
      // then, create a new user in database
      const newUser = {
        id: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        imageUri: getRandomImage(),
      };

      await API.graphql(graphqlOperation(createUser, {input: newUser}));
    };

    fetchUser();
  }, []);


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

export default withAuthenticator(App);
