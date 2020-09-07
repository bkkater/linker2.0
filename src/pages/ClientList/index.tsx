import React, { useState } from 'react';
import { View, Image, Button, Text, Picker } from 'react-native';
import { ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import style from './styles'

import Header from '../../components/Header'
import backArrow from '../../assets/back-arrow.png'
import ClientContainer from '../../components/ClientContainer';

import add from '../../assets/add.png'

function ClientList() {
    const { navigate } = useNavigation();

    function handleNavigateToBack() {
        navigate('HomeFinancer')
    }

    return (
        <>
        <ScrollView>
            <View style={{ alignItems: "center" }}>
                <View style={style.topBar} />
                <Header title={'Clientes'}
                    icon={<BorderlessButton onPress={handleNavigateToBack}><Image source={backArrow} style={{ marginRight: 10 }} /></BorderlessButton>}
                    logo={true}
                />

                <Text style={style.limitDate}>Data limite:</Text>

                <ClientContainer client='Jorge Carvalho' description='Padaria Sonho Bom' date='15/08' acess={false}/>
                <ClientContainer client='Maria Joana' description='MJ Arquitetura' date='30/08'  acess={false}/>
                <ClientContainer client='Luciana Silva' description='Startup Ajude+' date='10/08'  acess={false}/>
                <ClientContainer client='Anderson Carlos' description='Confeitaria Azul' date='15/09'  acess={false}/>
 
            </View>
        </ScrollView>

        <View style={{alignSelf: "flex-end"}}>
            <Image source={add}/>
        </View>
        </>
    );
}

export default ClientList;