import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Button, Text } from 'react-native';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import style from './styles'

import Header from '../../../components/Header'
import OrganizationContainer from '../../../components/OrganizationContainer';

import { useNavigation } from '@react-navigation/native';

import backArrow from '../../../assets/back-arrow.png'
import calculator from '../../../assets/calculator.png'
import add from '../../../assets/add.png'
import Item from '../../../components/Item';

function October() {
    const { navigate } = useNavigation();

    function handleNavigateToBack() {
        navigate('Home')
    }

    function handleNavigateToCalculator() {
        navigate('Calculator')
    }

    function handleNavigateToNovember() {
        navigate('November')

    }

    function handleNavigateToSeptember() {
        navigate('September')
    }

    return (
        <View style={{ alignItems: "center" }}>
            <View style={style.topBar} />
            <Header title={'Organização Financeira'}
                icon={<BorderlessButton onPress={handleNavigateToBack}><Image source={backArrow} style={{ marginRight: 10 }} /></BorderlessButton>}
                logo={true}
            />

            <View style={style.month}>
                <BorderlessButton onPress={handleNavigateToSeptember}><Feather name="chevron-left" size={24} color="#929090" /></BorderlessButton>
                <Text style={style.monthText}>Outubro</Text>
                <BorderlessButton onPress={handleNavigateToNovember}><Feather name="chevron-right" size={24} color="#929090" /></BorderlessButton>
            </View>

            <OrganizationContainer title={'Resumo de Movimentações'} icon={<BorderlessButton onPress={handleNavigateToCalculator}><Image source={calculator} /></BorderlessButton>}>
                <View style={style.recent}>
                    <Text style={style.typeNone}>Ainda não temos registro desse mês :(</Text>
                </View>

                <View style={style.information}>

                </View>
            </OrganizationContainer>

            <View style={style.details}>
                <BorderlessButton><Text style={style.detailsText}>Ver Relatório</Text></BorderlessButton>
            </View>

            <OrganizationContainer title={'Despesas por Categoria'} icon={<BorderlessButton><Image source={add} /></BorderlessButton>}>
            </OrganizationContainer>

            <OrganizationContainer title={'Receitas por Categoria'} icon={<BorderlessButton><Image source={add} /></BorderlessButton>}>
            </OrganizationContainer>
        </View>
    );
}

export default October;