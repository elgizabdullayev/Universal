import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import SearchScreen from '../screens/SearchScreen';
import { FAVORITES_SCREEN, SEARCH_SCREEN } from '../consts/strings';
import {Favorite} from '../../../assets/svg/favorite';
import {ForSearch} from '../../../assets/svg/search';

const MainTab = createBottomTabNavigator();
export const Main = () => {
    return(
        <MainTab.Navigator tabBarOptions={{labelStyle: {fontSize: 20, marginBottom: 10}}}>
            <MainTab.Screen name={SEARCH_SCREEN} component={SearchScreen} />
            <MainTab.Screen name={FAVORITES_SCREEN} component={FavoritesScreen}  />
        </MainTab.Navigator>
    )
}