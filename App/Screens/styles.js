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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    status: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 20
    },
    statusText: {
        fontFamily: 'notoserif',
        fontSize: 15,
        color: 'white'
    }
})

export default styles