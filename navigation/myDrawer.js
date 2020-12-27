import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import {Tools, Entertainment} from './stacks'
import {News} from '../screens/screens'
import {AboutMe} from './tab'
const Drawer = createDrawerNavigator();
export const MyDrawer=()=>{
    return(
      <Drawer.Navigator>
        <Drawer.Screen name="Tools" component={Tools} />
        <Drawer.Screen name="News" component={News} />
        <Drawer.Screen name="Entertainment" component={Entertainment} />
        <Drawer.Screen name="About Me" component={AboutMe} />
      </Drawer.Navigator>)
    }