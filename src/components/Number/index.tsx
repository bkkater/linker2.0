import React from 'react';
import { View, Text, Image } from 'react-native';

import style from './styles';

import equalIcon from '../../assets/equals.png'

interface NumberProps {
    text: string,
    equals: boolean
}

const Number: React.FC<NumberProps> = ({ text, equals }) => {
    if (equals) {
        return (
            <View style={style.numberContainer}>
                <View style={style.equals}>
                    <Text style={style.numberEquals}>{text}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={style.numberContainer}>
            <Text style={style.numberText}>{text}</Text>
        </View>

    );
}

export default Number;