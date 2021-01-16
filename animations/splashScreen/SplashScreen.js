import React, { Component } from 'react';
import {Animated, View, Image, Text,  TouchableOpacity, Modal} from 'react-native';
import {styles} from './style';
import LoadingScreen from '../loadingScreen/LoadingScreen'



export default class SplashScreen extends Component{
    constructor(){
        super();
        this.state={
            showLoading : false
        }
        this.scaleValue = new Animated.Value(0)
        this.textTranslate = new Animated.Value(350)
        this.planetTranslate = new Animated.Value(-150)
        this.planetBigTranslate = new Animated.Value(-350)
        this.planetLittleTranslate = new Animated.Value(-450)
        this.opacityValue = new Animated.Value(0)
    }
    animation(){
    Animated.stagger(7000, [
        Animated.parallel([
            Animated.spring(
                this.scaleValue,
                {
                  toValue: 0.5,
                  friction: 0.5,
                  tension: 1,
                  useNativeDriver: false
                }  
              ), 
              Animated.timing(
                this.textTranslate,{
                    toValue:0,
                    duration: 2500,
                    useNativeDriver: false
                }
              ),
              Animated.timing(
                this.planetTranslate,{
                    toValue:100,
                    duration: 2500,
                    useNativeDriver: false
                }
              ),
              Animated.timing(
                this.planetBigTranslate,{
                    toValue:-50,
                    duration: 3500,
                    useNativeDriver: false
                }
              ),
              Animated.timing(
                this.planetLittleTranslate,{
                    toValue:150,
                    duration: 5500,
                    useNativeDriver: false
                }
              ),
        ]),
        
        Animated.parallel([
            Animated.timing(
                this.scaleValue,{
                  toValue: 17,
                  duration: 3500,
                  useNativeDriver: false
                }
            ),
            Animated.timing(
                this.textTranslate,{
                    toValue:-350,
                    duration: 2500,
                    useNativeDriver: false
                }
            ),
            Animated.timing(
                this.planetTranslate,{
                    toValue:350,
                    duration: 2500,
                    useNativeDriver: false
                }
              ),
              Animated.timing(
                this.planetBigTranslate,{
                    toValue:350,
                    duration: 2500,
                    useNativeDriver: false
                }
              ),
              Animated.timing(
                this.planetLittleTranslate,{
                    toValue:350,
                    duration: 2500,
                    useNativeDriver: false
                }
              ),
              Animated.timing(
                this.opacityValue,{
                    toValue:1,
                    duration: 500,
                    useNativeDriver: false,
                    delay: 3000
                }
              ),
        ]),
    ]).start()
    }
    componentDidMount(){
        {this.animation()}
    }
    render(){
        return(
            <View style={styles.mainView}>
            <Animated.View style={{transform: [{translateX: this.planetTranslate}]}}>
                <View style={styles.circle}></View>
            </Animated.View>
            <Animated.View style={{transform: [{translateX: this.planetBigTranslate}]}}>
                <View style={styles.circleBig}></View>
            </Animated.View>
            <Animated.Image source={require('../images/logo.png')} style={styles.logoStyle, 
                {transform: [{scale: this.scaleValue}]}
                }/>
            <Animated.View style={{transform: [{translateX: this.textTranslate}]}}>
                 <Text style={styles.logoTextStyle}>Universal</Text>
                 </Animated.View>
            <Animated.View style={{transform: [{translateX: this.planetLittleTranslate}]}}>
                <View style={styles.circleLittle}></View>
            </Animated.View>
            <Animated.View style={{opacity: this.opacityValue }}>
                <TouchableOpacity onPress={()=>this.setState( {showLoading: true})}>
                <Image source={require('../images/play.png')} style={styles.playStyle} />
                </TouchableOpacity>
            </Animated.View>
            <Modal visible={this.state.showLoading} >
            <LoadingScreen/>
            </Modal>
            </View>
        );
    }
};