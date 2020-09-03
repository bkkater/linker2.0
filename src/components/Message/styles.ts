import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    message: {
        margin: 30,
        marginTop: 10,
        marginBottom: 20
    },
    messageHeader: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        marginBottom: 10
    },
    messageText: {
        fontFamily: 'Ubuntu_400Regular',
    },
    messageContent:{
        backgroundColor: '#E2E2E2',
        padding: 15,
        borderRadius: 8
    },
    hr: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#949494',
    }
})

export default styles;