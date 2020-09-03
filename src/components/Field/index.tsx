import React, { ReactNode, Props } from 'react';
import { View, Text, Image } from 'react-native';

import style from './styles'

import { TextInput } from 'react-native-gesture-handler';


interface LandingHeaderProps {
    placeholder: string;
}

const LandingHeader: React.FC<LandingHeaderProps> = ({ placeholder }) => {
    return (
        <View style={style.container}>
            <View style={style.fieldPlace}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor='#C1BCCC'
                    style={style.textInput}
                />

                <View style={style.field}></View>
            </View>
        </View>
    )
}

export default LandingHeader;