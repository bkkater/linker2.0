import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import style from './styles'

import messageRoute from '../../assets/message-route.png'
import { BorderlessButton } from 'react-native-gesture-handler';

interface MessageProps {
    name: string;
    messageContent: string
}

const Message: React.FC<MessageProps> = ({ name, messageContent }) => {
    const { navigate } = useNavigation();

    function handleNavigateToChat() {
        navigate('Chat')
    }

    return (
        <View>
            <View style={style.message}>
                <View style={style.messageHeader}>
                    <Text style={style.messageText}>{name}</Text>
                    <BorderlessButton onPress={handleNavigateToChat}>
                        <Image source={messageRoute} />
                    </BorderlessButton>

                </View>

                <View style={style.messageContent}>
                    <Text>{messageContent}</Text>
                </View>

            </View>
            <View style={style.hr}></View>
        </View>
    )
}

export default Message;