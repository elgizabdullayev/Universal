import React from 'react'
import {WebView} from 'react-native-webview';
import {TouchableOpacity, Text, View, Image} from 'react-native'
import {styles} from '../styles/stylesMain'

export const News = () => {
    return (
     <WebView
         source={ {uri: 'https://oxu.az/' }
         }>
     </WebView>
    );
  };
export const EntertainmentScreen = ({ navigation}) => {
    return (
    <View style={styles.forTools}>
    <TouchableOpacity onPress={()=>navigation.navigate("filmSearch")}>
    <Image source={require('../icons/movies.png')}></Image>
    </TouchableOpacity>
    </View>
    );
  };
export const ToolsScreen = ({ navigation}) => {
    return (
      <View style={styles.forTools}>
        <TouchableOpacity onPress={()=>navigation.navigate('Calculator')}>
        <Image source={require('../icons/calcIcon.png')}></Image>
      </TouchableOpacity>
      </View>
    );
  };
export const ProfileTab = () => {
    return (
        <View style={styles.mainView}>
        <Text style={styles.mainText}>
           Profile {"\n"}
           Abdullayev Elgiz{"\n"}
           Age: 22
        </Text>
      </View>
    );
  };
export const SettingsTab = () => {
    return (
      <View style={styles.mainView}>
      <Text style={styles.mainText}>
         You can not change anything{"\n"}
         This is life...{"\n"}
      </Text>
    </View>
    );
  };