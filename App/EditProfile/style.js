import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'black',
        backgroundColor: 'white',
    },
    edit: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    confirmButton: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00008b',
        backgroundColor: '#00008b',
        width: '20%',
        marginRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'black',
        width: '60%',
        marginLeft: 10,
        marginRight: 10
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'yellow'
    }
})

export default styles