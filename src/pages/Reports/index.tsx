import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Button, Text } from 'react-native';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import style from './styles'

import Header from '../../components/Header'
import OrganizationContainer from '../../components/OrganizationContainer';
import backArrow from '../../assets/back-arrow.png'
import Item from '../../components/Item';

import despesasBar from '../../assets/despesas-bar.png'
import receitasBar from '../../assets/receitas-bar.png'
import saldoBar from '../../assets/saldo-bar.png'
import Container from '../../components/Container';

function Organization() {
    const { navigate } = useNavigation();

    function handleNavigateToBack() {
        navigate('Organization')
    }

    function handleNavigateToExport() {
        navigate('Export')
    }
    return (
        <ScrollView>

            <View style={{ alignItems: "center"}}>
                <View style={style.topBar} />
                <Header title={'Relatórios Detalhados'}
                    icon={<BorderlessButton onPress={handleNavigateToBack}><Image source={backArrow} style={{ marginRight: 10 }} /></BorderlessButton>}
                    logo={true}
                />

                <View style={style.barGraphis}>
                    <View style={style.bar}>
                        <View style={style.top}>
                            <Image source={despesasBar} />
                            <Text style={style.typeBar}>Fixa</Text>
                        </View>

                        <View style={style.bottomDespesas}>
                            <Text style={style.despesasCash}>8300,00</Text>
                            <Text style={style.barText}>Despesas</Text>
                        </View>
                    </View>

                    <View style={style.bar}>
                        <View style={style.top}>
                            <Image source={saldoBar} />
                            <Text style={style.blueTypeBar}>Saldo</Text>
                            <Text style={style.typeBar}>Fixa</Text>
                        </View>

                        <View style={style.bottomSaldo}>
                            <Text style={style.saldoCash}>700,00</Text>
                            <Text style={style.barText}>Saldo</Text>
                        </View>

                    </View>

                    <View style={style.bar}>
                        <View style={style.top}>
                            <Image source={receitasBar} />
                            <Text style={style.greenTypeBar}>Fixa</Text>
                        </View>

                        <View style={style.bottomReceitas}>
                            <Text style={style.receitasCash}>9000,00</Text>
                            <Text style={style.barText}>Receitas</Text>
                        </View>
                    </View>

                </View>

                <View style={style.hr}></View>

                <Text style={style.title}>Receita</Text>

                <Container title={'Fixa'}>
                    <Item title='Condomínio 01' price='R$ 600,00' positive={true}></Item>
                    <Item title='Condomínio 02' price='R$ 600,00' positive={true}></Item>
                    <Item title='Condomínio 03' price='R$ 600,00' positive={true}></Item>
                    <Item title='Condomínio 04' price='R$ 600,00' positive={true}></Item>
                    <Item title='Condomínio 05' price='R$ 600,00' positive={true}></Item>
                    <Item title='Condomínio 06' price='R$ 600,00' positive={true}></Item>
                    <Item title='Condomínio 07' price='R$ 600,00' positive={true}></Item>
                    <Item title='Condomínio 08' price='R$ 600,00' positive={true}></Item>

                    <View style={style.margin}></View>


                </Container>

                <Container title={'Variável'}>
                    <Item title='Saldo Julho' price='R$ 600,00' positive={true}></Item>

                    <View style={style.margin}></View>
                </Container>

                <View style={style.hr}></View>

                <Text style={style.title}>Despesa</Text>


                <Container title={'Fixa'}>
                    <Item title='Salário Segurança' price='R$ 2865,00' positive={false}></Item>
                    <Item title='Salário Manutenção' price='R$ 2000,00' positive={false}></Item>
                    <Item title='Salário Limpeza' price='R$ 1894,86' positive={false}></Item>
                    <Item title='Salário Síndico' price='R$ 400,00' positive={false}></Item>

                    <View style={style.margin}></View>

                </Container>

                <Container title={'Variável'}>
                    <Item title='Conta de luz' price='432,88' positive={false}></Item>
                    <Item title='Conta de água' price='156,18' positive={false}></Item>
                    <View style={style.margin}></View>
                </Container>

                <View style={style.footer}>
                    <Text style={style.footerText}>Saldo ................................... R$ 700,00</Text>
                </View>

                <View style={style.details}>
                    <BorderlessButton onPress={handleNavigateToExport}><Text style={style.detailsText}>Exportar Relatório</Text></BorderlessButton>
                </View>
            </View>
        </ScrollView>
    );
}

export default Organization;