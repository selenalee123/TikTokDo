import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Share from 'react-native-share';
// import files from '../assets/filesBase64';

const Profile = () => {
  return (
    <View>

      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>John Doe</Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>Toronto, Ontario</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>john_doe@email.com</Text>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple >
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>

        <Text onPress={() => {EditProfile}}
        style={styles.menuItemText}>Edit Profile </Text>


      </View>


    </View>
  );
};

export default Profile;
// import React, {useEffect, useState} from 'react';
// import {View, FlatList, Dimensions} from 'react-native';
// import Post from '../../components/Post';
// import {API, graphqlOperation} from 'aws-amplify';

// import {listPosts} from '../../graphql/queries';

// const Home = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPost = async () => {
//       // fetch all the posts
//       try {
//         const response = await API.graphql(graphqlOperation(listPosts));
//         setPosts(response.data.listPosts.items);
//       } catch (e) {
//         console.error(e);
//       }
//     };

//     fetchPost();
//   }, []);

//   return (
//     <View>
//       <FlatList
//         data={posts}
//         renderItem={({item}) => <Post post={item} />}
//         showsVerticalScrollIndicator={false}
//         snapToInterval={Dimensions.get('window').height - 130}
//         snapToAlignment={'start'}
//         decelerationRate={'fast'}
//       />
//     </View>
//   );
// };

// export default Home;
