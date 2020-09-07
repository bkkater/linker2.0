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
    limitDate: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 18,
        color: '#1D244E',
        alignSelf: "flex-end",
        marginRight: 50
    }

})

export default styles;