
import React, {Component} from 'react';
import { AppState } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MyDrawer} from './navigation/myDrawer';
import SplashScreen from './animations/splashScreen/SplashScreen'

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      appState: AppState.currentState,
      showSplash: true
    }
  }

  componentDidMount() {
    setTimeout( () => this.setState({showSplash: false}), 10000);
    AppState.addEventListener("change", this.checkAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this.checkAppStateChange);
  }

 checkAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      alert("WELCOME BACK!");
    }
    this.setState({ appState: nextAppState });
  };
  render() {
     if(this.state.showSplash === false){
     return ( <NavigationContainer>
      <MyDrawer/>
      </NavigationContainer>)
     }
     else if(this.state.showSplash === true){
     return <SplashScreen/>
     }
    
}
}

