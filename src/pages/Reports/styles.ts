import { StyleSheet, YellowBox } from 'react-native';

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
        paddingRight: 60

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
})

export default styles;