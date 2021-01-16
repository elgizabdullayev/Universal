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
            Animated.stagger(500,[
                Animated.timing(
                    this.animatedCircle1,{
                        toValue:-10,
                        duration: 100,
                        useNativeDriver: false
                    }
                  ),
                  Animated.timing(
                    this.animatedCircle2,{
                        toValue:0,
                        duration: 100,
                        useNativeDriver: false
                    }
                  ),
                  Animated.timing(
                    this.animatedCircle3,{
                        toValue:10,
                        duration: 100,
                        useNativeDriver: false
                    }
                  ),
                  Animated.timing(
                    this.animatedCircle4,{
                        toValue:20,
                        duration: 100,
                        useNativeDriver: false
                    }
                  ),
                  Animated.timing(
                    this.animatedCircle5,{
                        toValue:100,
                        duration: 100,
                        useNativeDriver: false
                    }
                  ),
                  Animated.timing(
                    this.animatedCircle5,{
                        toValue:20,
                        duration: 100,
                        useNativeDriver: false
                    }
                  ),
                  Animated.timing(
                    this.animatedCircle4,{
                        toValue:10,
                        duration: 100,
                        useNativeDriver: false
                    }
                  ),
                  Animated.timing(
                    this.animatedCircle3,{
                        toValue:0,
                        duration: 100,
                        useNativeDriver: false
                    }
                  ),
                  Animated.timing(
                    this.animatedCircle2,{
                        toValue:-10,
                        duration: 100,
                        useNativeDriver: false
                    }
                  ),
                  Animated.timing(
                    this.animatedCircle1,{
                        toValue:-100,
                        duration: 100,
                        useNativeDriver: false
                    }
                  ),
            ]).start(()=>this.animation())
    }
    componentDidMount(){
        {this.animation()};
    }
    render() {
        return(
            <View style={styles.mainView}>
            <Animated.View style={{transform: [{translateX: this.animatedCircle1}]}} ><View style={styles.circle}/>
            </Animated.View>
            <Animated.View style={{transform: [{translateX: this.animatedCircle2}]}} ><View style={styles.circle}/>
            </Animated.View>
            <Animated.View style={{transform: [{translateX: this.animatedCircle3}]}} ><View style={styles.circle}/>
            </Animated.View>
            <Animated.View style={{transform: [{translateX: this.animatedCircle4}]}} ><View style={styles.circle}/>
            </Animated.View>
            <Animated.View style={{transform: [{translateX: this.animatedCircle5}]}} ><View style={styles.circle}/>
            </Animated.View>
            </View>
        );
    }
};