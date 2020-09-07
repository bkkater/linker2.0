import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        marginBottom: 5,
    },
    greenTitle: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 14,
        color: '#8ED4BF',
        alignSelf: "center",
        marginLeft: 20,
        width: 230
    },
    price: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 14,
        color: '#959595'
    },
    redTitle: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 14,
        color: '#FF6D70',
        marginLeft: 20,
        width: 230
    }
})

export default styles;