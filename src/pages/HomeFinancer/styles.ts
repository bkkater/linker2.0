import { StyleSheet, YellowBox } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: 340,
        height: 180,
        backgroundColor: '#FFF',
        borderRadius: 12,
        marginTop: 13,
        marginRight: 5,
        marginLeft: 5,
        shadowColor: "#050505",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        marginBottom: 20,
        alignSelf: "center"
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: 15    
    },
    topBar: {
        height: 30,
        width: 5000,
    },
    button: {
        width: 171,
        height: 115,
        backgroundColor: '#FFF',
        borderRadius: 12,
        justifyContent: "flex-end",
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    icon: {
            position: 'absolute',
            right: 15,
            top: 15
    },
    margin:{
        height: 30,
        width: 10
    },
    text: {
        color: '#316094',
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 20,
        margin: 20,
        marginRight: 150
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    atualizationText: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 15,
        color: '#696969',
        flexDirection: 'column',
        alignSelf: "center",
        marginTop: 30
    }
})

export default styles;