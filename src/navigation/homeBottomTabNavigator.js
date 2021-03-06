import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import EditProfile from '../screens/Profile/EditProfile';
import Inbox from '../screens/Inbox';
import ExploreNavigator from './ExploreNavigator';

import Camera from '../screens/Camera';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import plusIcon from '../assets/images/plus-icon.png';
import CreatePost from '../screens/CreatePost';


const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name={'home'} size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={'Search'}
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name={'search1'} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Upload'}
        component={Camera}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={plusIcon}
              style={{height: 35, resizeMode: 'contain'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Inbox'}
        component={Inbox}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'message-minus-outline'}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={EditProfile}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'person-outline'} size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;

// import React from 'react';
// import {Image, Text} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Home from '../screens/Home';
// import Camera from '../screens/Camera';

// import Entypo from 'react-native-vector-icons/Entypo';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import plusIcon from '../assets/images/plus-icon.png';

// const Tab = createBottomTabNavigator();

// const HomeBottomTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         tabStyle: {
//           backgroundColor: '#000',
//         },
//         activeTintColor: '#fff',
//       }}>
//       <Tab.Screen
//         name={'Home'}
//         component={Home}
//         options={{
//           tabBarIcon: ({color}) => (
//             <Entypo name={'home'} size={25} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name={'Search'}
//         component={() => <Text>Search</Text>}
//         options={{
//           tabBarIcon: ({color}) => (
//             <AntDesign name={'search1'} size={25} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name={'Upload'}
//         component={Camera}
//         options={{
//           tabBarIcon: ({}) => (
//             <Image
//               source={plusIcon}
//               style={{height: 35, resizeMode: 'contain'}}
//             />
//           ),
//           tabBarLabel: () => null,
//         }}
//       />
//       <Tab.Screen
//         name={'Inbox'}
//         component={Home}
//         options={{
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons
//               name={'message-minus-outline'}
//               size={25}
//               color={color}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name={'Profile'}
//         component={Home}
//         options={{
//           tabBarIcon: ({color}) => (
//             <Ionicons name={'person-outline'} size={25} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default HomeBottomTabNavigator;
