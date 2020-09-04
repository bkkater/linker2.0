import { StyleSheet, YellowBox } from 'react-native';

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
    button: {
        width: 171,
        height: 115,
        backgroundColor: '#FFF',
        borderRadius: 12,
        justifyContent: "flex-end",
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    icon: {
            position: 'absolute',
            right: 15,
            top: 15
    },
    margin:{
        height: 30,
        width: 10
    }
})

export default styles;