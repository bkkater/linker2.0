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
import Item from '../../components/Item';

function Organization() {
    const { navigate } = useNavigation();

    function handleNavigateToBack() {
        navigate('Home')
    }

    function handleNavigateToCalculator() {
        navigate('Calculator')
    }

    function handleNavigateToSeptember() {
        navigate('September')

    }

    function navigateToReports(){
        navigate('Reports')
    }

    return (
        <View style={{ alignItems: "center" }}>
            <View style={style.topBar} />
            <Header title={'Organização Financeira'}
                icon={<BorderlessButton onPress={handleNavigateToBack}><Image source={backArrow} style={{ marginRight: 10 }} /></BorderlessButton>}
                logo={true}
            />

            <View style={style.month}>
                <BorderlessButton><Feather name="chevron-left" size={24} color="#929090" /></BorderlessButton>
                <Text style={style.monthText}>Agosto</Text>
                <BorderlessButton onPress={handleNavigateToSeptember}><Feather name="chevron-right" size={24} color="#929090" /></BorderlessButton>
            </View>

            <OrganizationContainer title={'Resumo de Movimentações'} icon={<BorderlessButton onPress={handleNavigateToCalculator}><Image source={calculator} /></BorderlessButton>}>
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
                <BorderlessButton onPress={navigateToReports}><Text style={style.detailsText}>Ver Relatório</Text></BorderlessButton>
            </View>

            <OrganizationContainer title={'Despesas por Categoria'} icon={<BorderlessButton><Image source={add} /></BorderlessButton>}>
                <Item title='Conta de luz' price='432,88' positive={false}></Item>
                <Item title='Conta de água' price='156,18' positive={false}></Item>
                <Item title='Salario: Manutenção' price='2000,00' positive={false}></Item>
                <Item title='Salario: Seguranças' price='2865,00' positive={false}></Item>
            </OrganizationContainer>

            <OrganizationContainer title={'Receitas por Categoria'} icon={<BorderlessButton><Image source={add} /></BorderlessButton>}>
                <Item title='Condomínio 104' price='150,00' positive={true}></Item>
                <Item title='Condomínio 201' price='150,00' positive={true}></Item>
                <Item title='Condomínio 302' price='150,00' positive={true}></Item>
                <Item title='Condomínio 101' price='150,00' positive={true}></Item>
            </OrganizationContainer>
        </View>
    );
}

export default Organization;