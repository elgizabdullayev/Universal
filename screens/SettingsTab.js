import React from 'react'
import {Text, View} from 'react-native'
import {styles} from '../styles/stylesMain'




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