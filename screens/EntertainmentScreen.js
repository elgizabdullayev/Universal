import React from 'react'
import {TouchableOpacity,  View, Image} from 'react-native'
import {styles} from '../styles/stylesMain'


export const EntertainmentScreen = ({ navigation}) => {
    return (
    <View style={styles.forTools}>
    <TouchableOpacity onPress={()=>navigation.navigate("filmSearch")}>
    <Image source={require('../icons/movies.png')}></Image>
    </TouchableOpacity>
    </View>
    );
  };