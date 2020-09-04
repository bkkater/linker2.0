import React from 'react';
import { View, Image, Button } from 'react-native';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import style from './styles'

import HomeHeader from '../../components/HomeHeader'
import MainCard from '../../components/MainCard';
import Card from '../../components/Card';

import organization from '../../assets/organization.png'
import like from '../../assets/like.png'
import receipt from '../../assets/receipt.png'
import charge from '../../assets/charge.png'
import pay from '../../assets/pay.png'
import transfer from '../../assets/transfer.png'
import deposit from '../../assets/deposit.png'
import card from '../../assets/card.png'

import gift from '../../assets/gift.png'
import config from '../../assets/config.png'
import { useNavigation } from '@react-navigation/native';

function AppLoading() {
    const { navigate } = useNavigation();

    function handleNavigateToOrganization() {
        navigate('Organization')
    }
    return (
        <View>
            <View style={style.topBar} />
            <ScrollView>

                <HomeHeader />

                <View style={style.cardContainer}>
                    <MainCard first={true} />
                    <MainCard first={false} />
                </View>

                <View style={style.cardContainer}>
                    <RectButton onPress={handleNavigateToOrganization} style={style.button}>
                        <Image source={organization} style={style.icon} />
                        <Card text={'Organização Financeira'} />
                    </RectButton>

                    <RectButton style={style.button}>
                        <Card text={'Dicas'} />
                        <Image source={like} style={style.icon}/>
                    </RectButton>
                </View>

                <View style={style.cardContainer}>
                    <RectButton style={style.button}>
                        <Card text={'Depositar'} />
                        <Image source={deposit} style={style.icon}/>
                    </RectButton>

                    <RectButton style={style.button}>
                        <Card text={'Meus Cartões'} />
                        <Image source={card} style={style.icon}/>
                    </RectButton>
                </View>

                <View style={style.cardContainer}>
                    <RectButton style={style.button}>
                        <Card text={'Pagar Conta'} />
                        <Image source={pay} style={style.icon}/>
                    </RectButton>

                    <RectButton style={style.button}>
                        <Card text={'Transferência'} />
                        <Image source={transfer} style={style.icon} />
                    </RectButton>
                </View>

                <View style={style.cardContainer}>
                    <RectButton style={style.button}>
                        <Card text={'Comprovantes'} />
                        <Image source={receipt} style={style.icon}/>
                    </RectButton>

                    <RectButton style={style.button}>
                        <Card text={'Cobrança'} />
                        <Image source={charge} style={style.icon}/>
                    </RectButton>
                </View>

                <View style={style.cardContainer}>
                    <RectButton style={style.button}>
                        <Card text={'Recompensas'} />
                        <Image source={gift} style={style.icon}/>
                    </RectButton>

                    <RectButton style={style.button}>
                        <Card text={'Configurações'}/>
                        <Image source={config} style={style.icon}/>
                    </RectButton>
                    
                </View>
                <View style={style.margin}/>
            </ScrollView>
        </View>
    );
}

export default AppLoading;