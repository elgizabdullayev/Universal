import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ProfileTab, SettingsTab} from '../screens/screens'
const AboutMeTab = createBottomTabNavigator();
export const AboutMe =()=>{
  return(
    <AboutMeTab.Navigator>
        <AboutMeTab.Screen name="Profile"  component={ProfileTab} />
        <AboutMeTab.Screen name="Settings"  component={ SettingsTab} />
      </AboutMeTab.Navigator>
  )
}