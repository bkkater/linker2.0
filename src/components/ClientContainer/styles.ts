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

        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    text: {
        color: '#1D244E',
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 17,
        marginBottom: 10    
    },
    header: { 
        margin: 20
    },
    date:{
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 18,
        color: '#FF6D70',
        marginRight: 20
    },
    description: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 15,
        color: '#696969'
    },
    textInative: {
        color: '#696969',
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 17,
        marginBottom: 10    
    },
    descriptionInative: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 15,
        color: '#929090'
    },
    dateInative:{
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 18,
        color: '#929090',
        marginRight: 20
    },
})

export default styles;