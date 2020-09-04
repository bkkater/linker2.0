import React, { ReactNode, Props } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles'
import headerLogo from '../../assets/header-logo.png'

interface ItemProps {
    title: string
    price: string
    positive: boolean
}

const Item: React.FC<ItemProps> = ({ title, positive, price }) => {
    if (positive) {
        return (
            <View style={styles.header}>
                <Text style={styles.greenTitle}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
        )
    }
    return (
        <View style={styles.header}>
            <Text style={styles.redTitle}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    )
}

export default Item;