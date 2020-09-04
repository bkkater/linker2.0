import React, { ReactNode, Props } from 'react';
import { View, Text, Image } from 'react-native';

import style from './styles'

import { Feather } from '@expo/vector-icons'; 

import list from '../../assets/list.png'
import { RectButton } from 'react-native-gesture-handler';


interface MainCardProps {
    first: boolean
}

const MainCard: React.FC<MainCardProps> = ({ first }) => {
    if(first) {
        return (
            <RectButton style={style.container}>
                <Feather name="eye" size={35} color="white" style={style.icon}/>
    
                <Text style={style.text}>Saldo{"\n"}Disponível</Text>
                <Text style={style.cash}>R$ 0,00</Text>
    
            </RectButton>
        )
    }
    return (
        <RectButton style={style.difContainer}>
            <Image source={list} style={style.icon}/>

            <Text style={style.difText}>Ver{"\n"}Extrato</Text>
        </RectButton>
    )
    
}

export default MainCard;