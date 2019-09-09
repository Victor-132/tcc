import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 10
    },
    itensContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
    },
    item: {
        margin: 5,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        padding: 5
    }
})

export default styles