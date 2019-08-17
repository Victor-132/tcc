import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios' ?
    'https://localhost:3000' : 'https://10.0.2.2:3000'

function showError(err) {
    Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err}`)
}

export { server, showError }