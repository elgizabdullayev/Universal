import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import {Tools, Entertainment} from './stacks'
import {News} from '../screens/News'
import {AboutMe} from './tab'
import strings from '../localization'
const Drawer = createDrawerNavigator();
export const MyDrawer=()=>{
  strings.getInterfaceLanguage();
    return(
      <Drawer.Navigator>
        <Drawer.Screen name={strings.tools} component={Tools} />
        <Drawer.Screen name={strings.news} component={News} />
        <Drawer.Screen name={strings.entartainment} component={Entertainment} />
        <Drawer.Screen name={strings.aboutMe} component={AboutMe} />
      </Drawer.Navigator>)
    }