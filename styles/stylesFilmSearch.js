import {StyleSheet} from 'react-native'
export const stylesFilm = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#0f123f',
      justifyContent: 'flex-start',
    },
    titleName:{
      marginTop: 30,
      fontSize: 32,
      fontWeight: '700',
      textAlign: 'center',
      color: 'white'
    },
    search:{
    marginTop: 20,
    fontSize:20,
    fontWeight: '300',
    padding: 20,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 50,
    },
    results:{
    flex : 1,
    },
    touchableStyle:{
      alignSelf: 'center',
      width: 200,
      marginTop: 20,
      backgroundColor: "#fd93d5",
      padding: 15,
      borderRadius: 50,
    },
    touchableText:{
      color: "white",
      fontSize: 20,
      justifyContent: "center",
      textAlign: "center",
    },
    result:{
      fontSize: 25,
      color: 'white',
      alignSelf: 'center',
      backgroundColor:'#280e65',
      borderRadius: 20,
      padding: 5,
    },
    image:{
    alignSelf: 'center',
    marginTop: 30,
    resizeMode: 'contain',
    width:400,
    height:420,
    borderRadius: 10
    },
    })