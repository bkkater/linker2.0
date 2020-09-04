import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
    container: {
       
    },
    text: {
        color: '#316094',
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 25
    },
})

export default styles;