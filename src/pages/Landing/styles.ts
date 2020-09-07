import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#316094'
    },
    text: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 30,
        color: '#FFF',
        marginTop: 100,
        alignSelf: 'flex-start',
        marginLeft: 32
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 329,
        height: 60,
        borderWidth: 2,
        borderColor: '#FFF',
        borderStyle: "solid",
        borderRadius: 50,
        marginTop: 30,
    },
    redButton: {
        alignItems: "center",
        justifyContent: "center",
        width: 329,
        height: 60,
        backgroundColor: '#FF6D70',
        borderRadius: 50,
        marginTop: 60,
    },
    textButton: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 18,
        color: '#FFF',
    }
})

export default styles;