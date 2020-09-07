import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Button, Text, Picker } from 'react-native';
import { ScrollView, BorderlessButton, RectButton, TextInput } from 'react-native-gesture-handler';
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

function Export() {
    const { navigate } = useNavigation();

    function handleNavigateToBack() {
        navigate('Organization')
    }

    const [selectedValue, setSelectedValue] = useState("PDF");

    return (
        <ScrollView>

            <View style={{ alignItems: "center" }}>
                <View style={style.topBar} />
                <Header title={'Exportar Relatório'}
                    icon={<BorderlessButton onPress={handleNavigateToBack}><Image source={backArrow} style={{ marginRight: 10 }} /></BorderlessButton>}
                    logo={true}
                />

                <Text style={style.title}>E-mails de Destino:</Text>

                <TextInput style={style.textInput}></TextInput>

                <View style={style.pickerContainer}>
                    <Picker
                        selectedValue={selectedValue}
                        style={style.picker}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="PDF" value="pdf" />
                        <Picker.Item label="CSV" value="csv" />
                        <Picker.Item label="TAB" value="tab" />

                    </Picker>
                </View>

                <BorderlessButton style={style.sendButton}><Text style={style.sendButtonText}>Enviar</Text></BorderlessButton>


            </View>
        </ScrollView>
    );
}

export default Export;