import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Button, Text } from 'react-native';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import style from './styles'

import Header from '../../components/Header'
import OrganizationContainer from '../../components/OrganizationContainer';

import { useNavigation } from '@react-navigation/native';

import backArrow from '../../assets/back-arrow.png'
import calculator from '../../assets/calculator.png'
import add from '../../assets/add.png'

function Organization() {
    const { navigate } = useNavigation();

    function handleNavigateToBack() {
        navigate('Home')
    }

    function handleNavigateToCalculator() {
        navigate('Calculator')
    }

    return (
        <View style={{alignItems: "center"}}>
            <View style={style.topBar} />
            <Header title={'Organização Financeira'}
                icon={<BorderlessButton onPress={handleNavigateToBack}><Image source={backArrow} style={{marginRight: 10}}/></BorderlessButton>}
                logo={true}
            />

            <View style={style.month}>
                <BorderlessButton><Feather name="chevron-left" size={24} color="#929090" /></BorderlessButton>
                    <Text style={style.monthText}>Agosto</Text>
                <BorderlessButton><Feather name="chevron-right" size={24} color="#929090" /></BorderlessButton>
            </View>

            <OrganizationContainer title={'Resumo de Movimentações'} icon={<BorderlessButton onPress={handleNavigateToCalculator}><Image source={calculator}/></BorderlessButton>}>
               <View style={style.recent}>
                    <Text style={style.type}>Conta de Luz</Text>
               </View>
               
               <View style={style.information}>
                   <View style={style.content}>
                       <Text style={style.receitasText}>9000,00</Text>
                       <Text style={style.name}>Receitas</Text>
                   </View>

                   <View style={style.content}>
                       <Text style={style.saldoText}>700,00</Text>
                       <Text style={style.name}>Saldo</Text>
                   </View>

                   <View style={style.content}>
                       <Text style={style.despesasText}>8300,00</Text>
                       <Text style={style.name}>Despesas</Text>
                   </View>
                </View> 
            </OrganizationContainer>

            <View style={style.details}>
                <Text style={style.detailsText}>Relatório Detalhado</Text>
            </View>

            <OrganizationContainer title={'Despesas por Categoria'} icon={<BorderlessButton><Image source={add}/></BorderlessButton>}>

            </OrganizationContainer>

            <OrganizationContainer title={'Receitas por Categoria'} icon={<BorderlessButton><Image source={add}/></BorderlessButton>}>

            </OrganizationContainer>
        </View>
    );
}

export default Organization;