import React, { Component } from 'react';
import { View, Modal} from 'react-native';
import {WebView} from 'react-native-webview';
import LoadingScreen from '../animations/loadingScreen/LoadingScreen';
import NetInfo from "@react-native-community/netinfo";

export class News extends Component {
  constructor(props){
      super(props)
      this.state = {
          show : true
      }
  }
  stopShowing(){
      this.setState({ show : false})
  }
  componentDidMount(){
   this.listener()
  }
  componentWillUnmount(){
   this.listener()
  }
  listener = () => { NetInfo.addEventListener(state => {
    if(state.isInternetReachable === false){
        alert('NO CONNECTION')
    }
  })
};
   render(){
    return (
     <View style={{flex : 1}}>
     <WebView
         onLoad={() => this.stopShowing()}
         source={ {uri: 'https://oxu.az/' }
         }>
     </WebView>
     {this.state.show && 
        <Modal transparent>
            <LoadingScreen/>
        </Modal>
     }
     </View>
    );
    }
  };