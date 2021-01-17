import React, { Component } from 'react';
import {Animated, View,Text,} from 'react-native';
import {styles} from './style';
import {Planet} from '../../assets/svg/planet'



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
        const planetAnim = function (value, toValue, duration){
            return Animated.timing(
            value,{
              toValue,
              duration,
              useNativeDriver: false
            }
            )
          }
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
              planetAnim(this.textTranslate,0,2500),
              planetAnim(this.planetTranslate,100,2500),
              planetAnim(this.planetBigTranslate,-50,3500),
              planetAnim(this.planetLittleTranslate,150,5500),
        ]),
        Animated.parallel([
            planetAnim(this.scaleValue,20,3500),
            planetAnim(this.textTranslate,-350,2500),
            planetAnim(this.planetTranslate,350,2500),
            planetAnim(this.planetBigTranslate,350,2500),
            planetAnim(this.planetLittleTranslate,350,2500),
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
             <Animated.View style={styles.logoStyle, 
                {transform: [{scale: this.scaleValue}]}
                }>
                   <View>
                       <Planet/>
                    </View> 
                </Animated.View>
            <Animated.View style={{transform: [{translateX: this.textTranslate}]}}>
                 <Text style={styles.logoTextStyle}>Universal</Text>
                 </Animated.View>
            <Animated.View style={{transform: [{translateX: this.planetLittleTranslate}]}}>
                <View style={styles.circleLittle}></View>
            </Animated.View>
            </View>
        );
    }
};