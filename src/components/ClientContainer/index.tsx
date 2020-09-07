import React, { ReactNode, Props } from 'react';
import { View, Text, Image } from 'react-native';

import style from './styles'

import { Feather } from '@expo/vector-icons';

import list from '../../assets/list.png'
import { RectButton } from 'react-native-gesture-handler';


interface ClientContainerProps {
    client: string,
    date: string,
    description: string,
    acess: boolean
}

const ClientContainer: React.FC<ClientContainerProps> = ({ acess, client, date, description }) => {
    if(acess){
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <Text style={style.textInative}>{client}</Text>
                    <Text style={style.descriptionInative}>{description}</Text>       
                </View>
                <Text style={style.dateInative}>{date}</Text>
    
            </View>
        )
    }
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.text}>{client}</Text>
                <Text style={style.description}>{description}</Text>       
            </View>
            <Text style={style.date}>{date}</Text>

        </View>
    )

}

export default ClientContainer;