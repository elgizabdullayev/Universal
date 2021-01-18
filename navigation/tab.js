import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ProfileTab} from '../screens/ProfileTab'
import {SettingsTab} from '../screens/SettingsTab'
import {Profile} from '../assets/svg/profile'
import {About} from '../assets/svg/about'
const AboutMeTab = createBottomTabNavigator();
export const AboutMe =()=>{
  return(
    <AboutMeTab.Navigator tabBarOptions={{labelStyle: {fontSize: 20, marginBottom: 10}}}>
        <AboutMeTab.Screen name="Profile"  component={ProfileTab} />
        <AboutMeTab.Screen name="Settings"  component={ SettingsTab} />
      </AboutMeTab.Navigator>
  )
}