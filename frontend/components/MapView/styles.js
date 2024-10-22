import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        // paddingTop: Constants.statusBarHeight,
        paddingTop: 22, // 44? maybe?
        backgroundColor: '#fff',
        // padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontFamily: 'Avenir-Medium',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    map: {
        // flex: 1,
        width: '100%',
        height: '100%',
        padding: 0,
        // marginHorizontal: -15,
        marginBottom: -15,
    },
});

export default styles;