import { StyleSheet, YellowBox, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

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
        marginBottom: 15
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
        height: 36,
        width: 218,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
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
    top: {
        flex: 1
    },
    bottom: {
        flex: 3,
        height: 500,
        width: width,
        backgroundColor: '#ECECEC',
        borderTopColor: '#BFBDBD',
        borderTopWidth: 1,
        flexDirection: "row"
    },
    numberColumn: {
        flexDirection: 'row',
    },
    left: {
        flex: 3
    },
    right: {
        flex: 1,
        flexDirection: 'column'
    },
    actionButton: {
        alignItems: "center",
        justifyContent: "center",
        height: 90,
        width: 97
    }
})

export default styles;