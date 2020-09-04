import React, { ReactNode, Props } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles'
import headerLogo from '../../assets/header-logo.png'

interface HeaderProps {
    title: string;
    icon?: ReactNode;
    logo: boolean
}

const Header: React.FC<HeaderProps> = ({ title, children, icon, logo }) => {
    if (logo) {
        return (
            <View style={styles.header}>
                <View style={styles.left}>
                    {icon}
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Image source={headerLogo}></Image>
            </View>
        )
    }
    return (
        <View style={styles.header}>
            <View style={styles.left}>
                {icon}
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

export default Header;