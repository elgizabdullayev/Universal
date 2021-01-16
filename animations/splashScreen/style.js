import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({ 
    mainView:{
        flex: 1,
        backgroundColor: '#172065',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoStyle:{

         alignSelf: 'center',
         width: 200,
         height: 200
    },
    playStyle:{

        alignSelf: 'center',
        width: 80,
        height: 80
   },
    logoTextStyle:{
        alignSelf: 'center',
        fontSize: 45,
        color: '#fbe99e',
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    circle:{
        backgroundColor: '#ffdc85',
        width:30,
        height:30,
        borderRadius: 100,
    
    },
    circleBig:{
        backgroundColor: '#3153cb',
        width:100,
        height:100,
        borderRadius: 100,
    
    },
    circleLittle:{
        backgroundColor: '#21f8b6',
        width:20,
        height:20,
        borderRadius: 100,
    
    }

})