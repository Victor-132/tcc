import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 6,
        marginBottom: 10
    },
    items: {
        color: 'white',
        margin: 10,
        borderBottomWidth: 1,
        borderColor: 'white',
        paddingBottom: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default styles