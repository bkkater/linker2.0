import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';

import logo from '../../assets/logo.png'

import style from './styles'
import { LinearGradient } from 'expo-linear-gradient';

function AppLoading() {
        let height = Dimensions.get("screen").height;
    return (
        <View style={style.view}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#316094', '#316094', '#FF6D70']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: height
                }}
            />
            <Image source={logo} />
        </View>

    );
}

export default AppLoading;