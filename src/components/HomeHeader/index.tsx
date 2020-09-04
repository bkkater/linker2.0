import React, { ReactNode, Props } from 'react';
import { View, Text, Image } from 'react-native';

import { } from '@expo/vector-icons';

import styles from './styles'

import headerLogo from '../../assets/header-logo.png'
import menu from '../../assets/menu.png'

function HomeHeader() {
    return (
        <View style={styles.header}>
            <View style={styles.left}>
                <Image source={menu}/>
                <Text style={styles.title}>Sua Empresa</Text>
            </View>
            <Image source={headerLogo}></Image>
        </View>
    )
}

export default HomeHeader;