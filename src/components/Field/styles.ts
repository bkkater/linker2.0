import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20 
    },
    header: {
        position: "relative",
        backgroundColor: '#279FAE',
        height: 150,
        justifyContent: "center",
        alignItems: "center"
    },
    fieldPlace: {
        margin: 20,
        marginBottom: 0
    },
    field: {
        borderBottomWidth: 1,
        borderBottomColor: '#959595',
        width: width-80,
    },
    textInput: {
        padding: 5,
        paddingLeft: 0
    },
})

export default styles;