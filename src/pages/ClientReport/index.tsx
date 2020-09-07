import React, { useState } from 'react';
import { View, Image, Button, Text, Picker } from 'react-native';
import { ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import style from './styles'

import Header from '../../components/Header'
import backArrow from '../../assets/back-arrow.png'
import ClientContainer from '../../components/ClientContainer';

function ClientReport() {
    const { navigate } = useNavigation();

    function handleNavigateToBack() {
        navigate('HomeFinancer')
    }

    return (
        <ScrollView>
            <View style={{ alignItems: "center" }}>
                <View style={style.topBar} />
                <Header title={'Extratos'}
                    icon={<BorderlessButton onPress={handleNavigateToBack}><Image source={backArrow} style={{ marginRight: 10 }} /></BorderlessButton>}
                    logo={true}
                />

                <Text style={style.limitDate}>Mês:</Text>

                <ClientContainer client='Jorge Carvalho' description='Padaria Sonho Bom' date='08/20' acess={false}/>
                <ClientContainer client='Maria Joana' description='MJ Arquitetura' date='08/20'  acess={false}/>
                <ClientContainer client='Luciana Silva' description='Startup Ajude+' date='08/20'  acess={false}/>
                <ClientContainer client='Anderson Carlos' description='Confeitaria Azul' date='09/20'  acess={false}/>

                <ClientContainer client='Maria Joana' description='MJ Arquitetura' date='07/20'  acess={true}/>
                <ClientContainer client='Luciana Silva' description='Startup Ajude+' date='07/20'  acess={true}/>
                <ClientContainer client='Anderson Carlos' description='Confeitaria Azul' date='07/20'  acess={false}/>
                <ClientContainer client='Jorge Carvalho' description='Padaria Sonho Bom' date='06/20' acess={true}/>


 
            </View>
        </ScrollView>
    );
}

export default ClientReport;