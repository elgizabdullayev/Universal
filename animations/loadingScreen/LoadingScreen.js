import React, { Component } from 'react';
import {Animated, View} from 'react-native';
import {styles} from './style';



export default class LoadingScreen extends Component{
    constructor(){
        super();
        this.animatedCircle1 = new Animated.Value(-100)
        this.animatedCircle2 = new Animated.Value(-10)
        this.animatedCircle3 = new Animated.Value(0)
        this.animatedCircle4 = new Animated.Value(10)
        this.animatedCircle5 = new Animated.Value(20)
    }
    animation() {
      const circleAnim = function (value, toValue, duration){
        return Animated.timing(
        value,{
          toValue,
          duration,
          useNativeDriver: false
        }
        )
      }
            Animated.stagger(500,[
              circleAnim(this.animatedCircle1, -10, 100),
              circleAnim(this.animatedCircle2, 0, 100),
              circleAnim(this.animatedCircle3, 10, 100),
              circleAnim(this.animatedCircle4, 20, 100),
              circleAnim(this.animatedCircle5, 100, 100),
              circleAnim(this.animatedCircle5, 20, 100),
              circleAnim(this.animatedCircle4, 10, 100),
              circleAnim(this.animatedCircle3, 0, 100),
              circleAnim(this.animatedCircle2, -10, 100),
              circleAnim(this.animatedCircle1, -100, 100)
            ]).start(()=>this.animation())
    }
    componentDidMount(){
        {this.animation()};
    }
    render() {
        return(
            <View style={styles.mainView}>
           <Animated.View style={{transform: [{translateX: this.animatedCircle1}]}}>
           <View style={styles.circle}/>
          </Animated.View>
          <Animated.View style={{transform: [{translateX: this.animatedCircle2}]}}>
           <View style={styles.circle}/>
          </Animated.View>
          <Animated.View style={{transform: [{translateX: this.animatedCircle3}]}}>
           <View style={styles.circle}/>
          </Animated.View>
          <Animated.View style={{transform: [{translateX: this.animatedCircle4}]}}>
           <View style={styles.circle}/>
          </Animated.View>
          <Animated.View style={{transform: [{translateX: this.animatedCircle5}]}}>
           <View style={styles.circle}/>
          </Animated.View>
          </View>
        );
    }
};