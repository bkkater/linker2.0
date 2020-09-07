import React, { ReactNode, Props } from 'react';
import { View, Text, Image } from 'react-native';

import { } from '@expo/vector-icons';

import styles from './styles'

import headerLogo from '../../assets/header-logo.png'
import menu from '../../assets/menu.png'

interface HomeHeaderProps {
    title: string;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ title }) => {
    return (
        <View style={styles.header}>
            <View style={styles.left}>
                <Image source={menu}/>
                <Text style={styles.title}>{title}</Text>
            </View>
            <Image source={headerLogo}></Image>
        </View>
    )
}

export default HomeHeader;