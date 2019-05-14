import {
    StyleSheet

} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontFamily: 'notoserif',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        height: '10%'

    },
    loginUser: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    text: {
        fontSize: 18,
        color: 'white',
        margin: 10
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
        alignItems: 'center'
    },
    passForg: {

    },
    textForg: {
        fontSize: 18,
        color: 'white',
        fontWeight: '500',
        alignItems: 'center',
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginTop: 10
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 50

    },
    eyeBtn: {
        position: 'absolute',
        bottom: 8,
        left: 140
    },
    signIn: {
        color: 'yellow',
        textAlign: 'center',
        alignItems: 'center',
        borderColor: 'rgb(0, 0, 0)'
    },
    loginLinks: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpText: {
        color: 'white',
        fontSize: 16,
        marginTop: 10
    },
    create: {
        color: '#ffffff',
        fontSize: 16,
        textDecorationLine: 'underline',
        fontWeight: '500',
        marginTop: 10
    }

})

export default styles

/*cor sign in retangulo

 marginTop: 20,
        borderWidth: 1,
        backgroundColor: '#ffff80',
        borderTopLeftRadius: 1,
        color: 'yellow',
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#ffff80'



singIn
height: 50
top: 10*/