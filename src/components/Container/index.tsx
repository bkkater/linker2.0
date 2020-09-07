import React, { ReactNode, Props } from 'react';
import { View, Text, Image } from 'react-native';

import style from './styles'

import { Feather } from '@expo/vector-icons';

import list from '../../assets/list.png'
import { RectButton } from 'react-native-gesture-handler';


interface ContainerProps {
    title: string,
}

const Container: React.FC<ContainerProps> = ({ children, title }) => {
    return (
        <View style={style.container}>
            <Text style={style.text}>{title}</Text>
            {children}
        </View>
    )

}

export default Container;