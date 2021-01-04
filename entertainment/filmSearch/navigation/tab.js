import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import SearchScreen from '../screens/SearchScreen';
const MainTab = createBottomTabNavigator();
export const Main = () => {
    return(
        <MainTab.Navigator tabBarOptions={{labelStyle: {fontSize: 20, marginBottom: 10}}}>
            <MainTab.Screen name='Search' component={SearchScreen} />
            <MainTab.Screen name='Favorites' component={FavoritesScreen} />
        </MainTab.Navigator>
    )
}