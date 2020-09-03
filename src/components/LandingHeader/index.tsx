import React, { ReactNode, Props } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles'

import landingImage from '../../assets/landing-header.png'


function LandingHeader() {
        return (
            <View style={styles.header}>
                <Image source={landingImage} style={styles.image}></Image>
            </View>
        )
}

export default LandingHeader;