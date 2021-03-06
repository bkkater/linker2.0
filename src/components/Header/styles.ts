import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        position: "relative",
        height: 110,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    title: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 18,
        marginLeft: 10,
        marginRight: 20,
        color: '#316094',
        alignSelf: "center",
        width: 120
    },
    left: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        marginRight: 25 
    },
})

export default styles;