import {
    StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'notoserif',
        color: 'white',
        fontSize: 30,
        width: '80%',
        bottom: 110
    },
    LoginUser: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        bottom: 80
    },
    userInput: {
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        borderRadius: 25,
        width: '80%',
        height: 45,
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16,
        marginHorizontal: 25,
        textAlign: 'center',
        paddingLeft: 25,
    },
    loginLinks: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: 20,
        borderWidth: 1,
        backgroundColor: '#00008b',
        width: '40%',
        color: 'yellow',
        paddingLeft: 35,
        paddingRight: 35,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: '#00008b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        bottom: 70,
        right: 75
    },
    buttonCancel: {
        marginTop: 20,
        borderWidth: 1,
        backgroundColor: 'red',
        width: '40%',
        color: 'white',
        paddingLeft: 35,
        paddingRight: 35,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        bottom: 133,
        left: 75

    },
    Recover: {
        color: 'yellow'

    },
    Cancel: {
        color: 'yellow'
    }
})

export default styles