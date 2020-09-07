import React from 'react';
import { View, Image, Text } from 'react-native';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; 

import style from './styles'

import HomeHeader from '../../components/HomeHeader'
import Card from '../../components/Card';
import organization from '../../assets/organization.png'
import card from '../../assets/card.png'
import users from '../../assets/users.png'


import config from '../../assets/config.png'


function HomeFinancer() {
    const { navigate } = useNavigation();

    function handleNavigateToOrganization() {
        navigate('Organization')
    }

    function handleNavigateToClientList() {
        navigate('ClientList')
    }

    function handleNavigateToClientReport() {
        navigate('ClientReport')
    }


    return (
        <View>
            <View style={style.topBar} />
            <ScrollView>

                <HomeHeader title='Olá, João' />

                <View style={style.container}>
                    <View style={style.headerContainer}>
                        <Text style={style.text}>Atualizações</Text>
                        <Feather name="file-text" size={30} color="#FF6D70"/>
                    </View>
                    <Text style={style.atualizationText}>Jorge compartilhou um relatório</Text>

                </View>

                <View style={style.cardContainer}>
                    <RectButton style={style.button} onPress={handleNavigateToClientList}>
                        <Card text={'Clientes'} />
                        <Image source={users} style={style.icon} />
                    </RectButton>

                    <RectButton style={style.button} onPress={handleNavigateToClientReport}>
                        <Card text={'Extratos'} />
                        <Image source={card} style={style.icon} />
                    </RectButton>
                </View>

                <View style={style.cardContainer}>
                    <RectButton onPress={handleNavigateToOrganization} style={style.button}>
                        <Image source={organization} style={style.icon} />
                        <Card text={'Organização Financeira'} />
                    </RectButton>

                    <RectButton style={style.button}>
                        <Card text={'Ajustes'} />
                        <Image source={config} style={style.icon} />
                    </RectButton>

                </View>
                <View style={style.margin} />
            </ScrollView>
        </View>
    );
}

export default HomeFinancer;