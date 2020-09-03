import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        position: "relative",
        backgroundColor: '#279FAE',
        height: 150
    },
    textHeader: {
        fontSize: 25,
        position: "absolute",
        color: '#FFF',
        bottom: 10,
        left: 20,
        fontFamily: 'Ubuntu_700Bold',
        marginBottom: 30
    },
    image: {
        margin: 20,
        marginTop: 40
    },
    textDescription: {
        fontSize: 18,
        position: "absolute",
        color: '#FFF',
        bottom: -18,
        left: 22,
        fontFamily: 'Ubuntu_500Medium',
        marginBottom: 30
    }
})

export default styles;