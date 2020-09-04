import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Button, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import style from './styles'

import Header from '../../components/Header'
import Number from '../../components/Number'

import backArrow from '../../assets/back-arrow.png'
import deleteIcon from '../../assets/delete.png'

function Organization() {
    const { navigate } = useNavigation();

    function handleNavigateToBack() {
        navigate('Organization')
    }

    return (
        <View style={{ alignItems: "center" }}>
            <View style={style.topBar} />
            <Header title={'Calculadora'}
                icon={<BorderlessButton onPress={handleNavigateToBack}><Image source={backArrow} style={{ marginRight: 10 }} /></BorderlessButton>}
                logo={true}
            />

            <View>
                <View style={style.top}></View>
                <View style={style.bottom}>
                    <View style={style.left}>
                        <View style={style.numberColumn}>
                            <BorderlessButton><Number text='7' equals={false}/></BorderlessButton>
                            <BorderlessButton><Number text='8' equals={false}/></BorderlessButton>
                            <BorderlessButton><Number text='9' equals={false}/></BorderlessButton>
                        </View>

                        <View style={style.numberColumn}>
                            <BorderlessButton><Number text='4' equals={false}/></BorderlessButton>
                            <BorderlessButton><Number text='5' equals={false}/></BorderlessButton>
                            <BorderlessButton><Number text='6' equals={false}/></BorderlessButton>
                        </View>

                        <View style={style.numberColumn}>
                            <BorderlessButton><Number text='1' equals={false}/></BorderlessButton>
                            <BorderlessButton><Number text='2' equals={false}/></BorderlessButton>
                            <BorderlessButton><Number text='3' equals={false}/></BorderlessButton>
                        </View>

                        <View style={style.numberColumn}>
                            <BorderlessButton><Number text='0' equals={false}/></BorderlessButton>
                            <BorderlessButton><Number text=',' equals={false}/></BorderlessButton>
                            <BorderlessButton><Number text='=' equals={true}/></BorderlessButton>
                        </View>
                    </View>

                    <View style={style.right}>
                            <BorderlessButton style={style.actionButton}><Image source={deleteIcon}></Image></BorderlessButton>
                            <BorderlessButton style={style.actionButton}><FontAwesome5 name="divide" size={26} color="#316094"/></BorderlessButton>
                            <BorderlessButton style={style.actionButton}><FontAwesome5 name="times" size={26} color="#316094" /></BorderlessButton>
                            <BorderlessButton style={style.actionButton}><FontAwesome5 name="minus" size={26} color="#316094" /></BorderlessButton>
                            <BorderlessButton style={style.actionButton}><FontAwesome5 name="plus" size={26} color="#316094" /></BorderlessButton>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Organization;