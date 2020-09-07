import { StyleSheet, YellowBox, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: 15    
    },
    topBar: {
        height: 30,
        width: 5000,
    },
    month:{
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    monthText: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 16,
        marginLeft: 40,
        marginRight: 40,
        color: '#525252',
        alignSelf: "baseline",
    },
    details: {
        backgroundColor: '#FF6D70',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        padding: 9,
        paddingLeft: 60,
        paddingRight: 60,
        marginBottom: 40

    },
    detailsText: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 14,
        color: '#fff',
    },
    recent: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        marginTop: 10
    },
    type: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 16,
        color: '#FF6D70',
        marginLeft: 5
    },
    information: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: 20
    },
    content: {
        alignItems: "center"
    },
    receitasText: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 16,
        color: '#8ED4BF'
    },
    saldoText: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 16,
        color: '#316094'
    },
    despesasText: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 16,
        color: '#FF6D70'
    },
    name: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 14,
        color: '#959595'
    },
    barGraphis: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 40,
        marginBottom: 40
    },
    bar: {
        marginRight: 20,
        marginLeft: 20,
    },
    despesasCash: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 15,
        color: '#FF6D70'
    },
    receitasCash: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 15,
        color: '#4CC123'
    },
    saldoCash: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 15,
        color: '#316094'
    },
    barText: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 14,
        color: '#959595',
    },
    blueTypeBar: {
        position: "absolute",
        top: 0,
        right: -5,
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 14,
        color: '#316094',
    },
    typeBar: {
        marginLeft: 5,
        marginRight: 5,
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 14,
        color: '#FF6D70',
    },
    greenTypeBar: {
        marginLeft: 5,
        marginRight: 5,
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 14,
        color: '#4CC123',
    },
    top: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    bottomDespesas: {
        position: 'absolute',
        bottom: -40,
        left: -10,
        alignItems: "center"
    },
    bottomReceitas: {
        position: 'absolute',
        bottom: -40,
        left: -10,
        alignItems: "center"
    },
    bottomSaldo: {
        position: 'absolute',
        bottom: -40,
        left: -6,
        alignItems: "center"
    },
    margin: {
        marginBottom: 20
    },
    title: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 26,
        color: '#316094',
        marginBottom: 15
    },
    hr: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#BFBDBD',
        width: width,
        marginBottom: 15,
        marginTop: 15
    },
    footer: {
        backgroundColor: '#316094',
        width: width,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40
    },
    footerText: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 20,
        color: '#FFF',
        marginTop: 10,
        marginBottom: 10,
    },

})

export default styles;