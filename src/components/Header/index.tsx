import React, { ReactNode, Props } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles'

interface HeaderProps {
    title: string;
    description?: string; 
}

const Header: React.FC<HeaderProps> = ({ title, description, children}) => {
    return (
        <View style={styles.header}>
            {children}
            <Text style={styles.textHeader}>{title}</Text>
            <Text style={styles.textDescription}>{description}</Text>
        </View>
    )   
}

export default Header;