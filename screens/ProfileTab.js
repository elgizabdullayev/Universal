import React from 'react'
import {Text, View} from 'react-native'
import {styles} from '../styles/stylesMain'



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