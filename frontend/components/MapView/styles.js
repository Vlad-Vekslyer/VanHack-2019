import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontFamily: 'Avenir-Medium',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    map: {
        flex: 1,
        padding: 0,
        marginHorizontal: -15,
        marginBottom: -15,
    },
});

export default styles;