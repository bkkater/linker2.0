import React, { ReactNode, Props } from 'react';
import { View, Text, Image } from 'react-native';

import style from './styles'

interface CardProps {
    text: string
}

const Card: React.FC<CardProps> = ({ text }) => {
    return (
        <View style={style.container}>

            <Text style={style.text}>{text}</Text>

        </View>
    )
}

export default Card;