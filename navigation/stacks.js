import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FilmSearch } from '../entertainment/FilmSearch';
import { Calculator } from '../tools/Calculator';
import {ToolsScreen, EntertainmentScreen} from '../screens/screens'
const ToolsStack = createStackNavigator();
const EntertainmentStack = createStackNavigator();
export const Tools =()=>{
  return (
    <ToolsStack.Navigator>
    <ToolsStack.Screen name ="tools" component={ToolsScreen}
    options={{
      title: 'Tools',
      headerStyle: {
        backgroundColor: '#0f123f',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}></ToolsStack.Screen>
    <ToolsStack.Screen name ="Calculator" component={Calculator}
    options={{
      title: 'Calculator',
      headerStyle: {
        backgroundColor: '#0f123f',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}></ToolsStack.Screen>
    </ToolsStack.Navigator>
  );
}
export const Entertainment=()=>{
    return(
    <EntertainmentStack.Navigator>
    <EntertainmentStack.Screen name ="entertainment" component={EntertainmentScreen}
    options={{
      title: 'Entartainment',
      headerStyle: {
        backgroundColor: '#0f123f',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}></EntertainmentStack.Screen>
    <EntertainmentStack.Screen name ="filmSearch" component={FilmSearch}
    options={{
      title: 'Film Search',
      headerStyle: {
        backgroundColor: '#0f123f',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    ></EntertainmentStack.Screen>
    </EntertainmentStack.Navigator>
    );
}