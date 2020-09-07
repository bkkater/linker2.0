import React from 'react';
import { View, Image, Text, Dimensions, TouchableHighlight } from 'react-native';

import logo from '../../assets/landing-logo.png'

import style from './styles'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function Landing() {
    const { navigate } = useNavigation();

    function handleNavigateToHome() {
        navigate('Home')
    }

    function handleNavigateToHomeFinancer() {
        navigate('HomeFinancer')
    }
    return (
        <View style={style.view}>
            <Image source={logo} style={{ marginTop: 100 }} />

            <Text style={style.text}>Entrar como:</Text>

            <TouchableHighlight style={style.redButton} onPress={handleNavigateToHome} underlayColor='#FF7779'><Text style={style.textButton}>Empreendedor</Text></TouchableHighlight>
            <TouchableHighlight style={style.button} onPress={handleNavigateToHomeFinancer} underlayColor='none'><Text style={style.textButton}>Financeiro</Text></TouchableHighlight>

        </View>

    );
}

export default Landing;