import React, { ReactNode, Props } from 'react';
import { View, Text, Image } from 'react-native';

import style from './styles'

import { Feather } from '@expo/vector-icons';

import list from '../../assets/list.png'
import { RectButton } from 'react-native-gesture-handler';


interface OrganizationContainerProps {
    title: string,
    icon?: ReactNode
}

const OrganizationContainer: React.FC<OrganizationContainerProps> = ({ children, title, icon }) => {
    return (
        <View style={style.container}>
            <View style={style.icon}>
                {icon}
            </View>
            <Text style={style.text}>{title}</Text>
            {children}
        </View>
    )

}

export default OrganizationContainer;