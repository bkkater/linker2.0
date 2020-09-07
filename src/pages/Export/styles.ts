import { TextInput } from 'react-native-gesture-handler';
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
    textInput: {
        height: 80,
        borderColor: '#959595',
        borderWidth: 1,
        width: 330,
        borderRadius: 8,
        marginTop: 15
    },
    title:{
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 18,
        color: '#316094',
        alignSelf: 'flex-start',
        marginLeft: 32
    },
    picker: {
        width: 100,
        height: 100,
        color: 'white',
        fontFamily: 'Ubuntu_500Medium',
    },
    pickerContainer: {
        backgroundColor: '#FF6D70',
        height: 40,
        justifyContent: "center",
        borderRadius: 8,
        alignSelf: 'flex-start',
        marginLeft: 32,
        marginTop: 50 
    },
    sendButton: {
        backgroundColor: '#316094',
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        alignSelf: 'flex-end',
        marginRight: 32,
        marginTop: 200,
        width: 150,
    },
    sendButtonText: {
        color: 'white',
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 18
    }

})

export default styles;