import React from 'react'
import { View, Text } from 'react-native'
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/Discover/SearchResults';
import SearchResultsMap from '../screens/Discover/SearchResultsMap';
import { useRoute } from "@react-navigation/native";


const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTinColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454',
            }
        }}>
            <Tab.Screen name={"List"}
            component={SearchResults}/>
            <Tab.Screen name={"Map"}
            component={SearchResultsMap}/>
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator
