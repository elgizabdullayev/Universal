
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyDrawer} from './navigation/myDrawer'

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <NavigationContainer>
        <MyDrawer></MyDrawer>
    </NavigationContainer>
    );
  }


  
}

