import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ProfileTab, SettingsTab} from '../screens/screens'
const AboutMeTab = createBottomTabNavigator();
export const AboutMe =()=>{
  return(
    <AboutMeTab.Navigator tabBarOptions={{labelStyle: {fontSize: 20, marginBottom: 10}}}>
        <AboutMeTab.Screen name="Profile"  component={ProfileTab} />
        <AboutMeTab.Screen name="Settings"  component={ SettingsTab} />
      </AboutMeTab.Navigator>
  )
}