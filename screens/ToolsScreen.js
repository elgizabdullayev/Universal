import React from 'react'
import {TouchableOpacity, View, Image} from 'react-native'
import {styles} from '../styles/stylesMain'



export const ToolsScreen = ({ navigation}) => {
    return (
      <View style={styles.forTools}>
        <TouchableOpacity onPress={()=>navigation.navigate('Calculator')}>
        <Image source={require('../icons/calcIcon.png')}></Image>
      </TouchableOpacity>
      </View>
    );
  };