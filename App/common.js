import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios' ?
    'https://localhost:3000' : 'http://10.2.1.40:3000'

function showError(err) {
    Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err}`)
}

export { server, showError }