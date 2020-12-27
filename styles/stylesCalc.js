
import {StyleSheet} from 'react-native'
export const stylesCalc = StyleSheet.create({
    container:{
      flex: 1
    },
    result:{
      flex:2,
      flexDirection:'row',
      backgroundColor: '#4954d1',
      justifyContent: 'flex-end'
    },
    calculation:{
      flexDirection:'row',
      justifyContent: 'flex-end',
      flex:4,
      backgroundColor: '#4954d1'
    },
    numbers:{
      flex:7,
      flexDirection : 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#1d1e23'
    },
    buttons:{
      flex:2,
      flexDirection : 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor:'#8dc44e'
    },
    numbersText:{
      color: 'white',
      justifyContent: 'space-around',
      alignSelf: 'center',
      fontSize: 60,
    },
    resultText:{
      color: 'white',
      fontSize: 70,
      justifyContent: 'space-around',
      alignSelf: 'center',
      
    },
    calculationText:{
      color: '#1d1e23',
      fontSize:50,
      justifyContent: 'space-around',
      alignSelf: 'center',
    
    },
    touchableStyle:{
      width:'25%'
    }
    });