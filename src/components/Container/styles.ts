import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
    container: {
        width: 340,
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
    },
    text: {
        color: '#696969',
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 16,
        margin: 20
    },
})

export default styles;