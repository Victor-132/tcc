import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        borderColor: 'rgba(255, 255, 255, 0.7)',
        borderWidth: 2,
        borderRadius: 6,
        padding: 5,
        margin: 5,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconsView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    status: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 20,
        left: 100
    },
    statusText: {
        fontFamily: 'notoserif',
        fontSize: 15,
        color: 'white',
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 6,
        width: '80%',
        marginTop: 10,
        marginBottom: 10
    }
})

export default styles