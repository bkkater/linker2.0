import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
    container: {
        width: 170,
        height: 179,
        backgroundColor: '#316094',
        borderRadius: 12,
        justifyContent: "center",
        marginRight: 5,
        marginLeft: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        marginBottom: 15,
    },
    difContainer: {
        width: 170,
        height: 179,
        backgroundColor: '#FF6D70',
        borderRadius: 12,
        justifyContent: "flex-end",
        marginRight: 5,
        marginLeft: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        marginBottom: 15,
    },
    icon: {
        position: 'absolute',
        right: 15,
        top: 15
    },
    text: {
        color: '#FFF',
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 20,
        marginLeft: 10
    },
    cash: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 23,
        color: '#8ED4BF',
        marginLeft: 10,
        marginTop: 10
    },
    difText: {
        color: '#FFF',
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 20,
        marginLeft: 10,
        marginBottom: 30
    }
})

export default styles;