import {
    StyleSheet,
    Dimensions,

} from 'react-native'

const { width: WIDTH } = Dimensions.get('window')

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
        height: WIDTH - 300

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
        width: WIDTH - 55,
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
        borderTopLeftRadius: 1,
        width: 140,
        color: 'yellow',
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#00008b',
        left: 20,
    },
    passForg: {

    },
    textForg: {
        fontSize: 18,
        color: 'white',
        alignItems: 'center',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20,
        textDecorationLine: 'underline',
        left: 15
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 50

    },
    inputIconEye: {
        position: 'absolute',
        bottom: 8,
        left: 140
    },
    signIn: {
        color: 'yellow',
        height: 50,
        width: WIDTH - 300,
        textAlign: 'center',
        alignItems: 'center',
        top: 10,
        borderColor: 'rgb(0, 0, 0)'

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