import React, { Component } from 'react'
import {
    Alert,
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { server, showError } from '../common'
import axios from 'axios'
import styles from './style'

export default class EditProfile extends Component {

    state = {
        name: null,
        password: null,
        confirmPassword: null,
        model: null
    }

    _SaveName(name) {
        this.setState({ name })
    }

    _SavePassword(password) {
        this.setState({ password })
    }

    _SaveConfirmPassword(confirmPassword) {
        this.setState({ confirmPassword })
    }

    _SaveMotorcycle(model) {
        this.setState({ model })
    }

    _AlterMotorcycle = async () => {
        try {
            await axios.post(`${server}/motorcycles`, {
                model: this.state.model
            })

            Alert.alert('Sucesso!', 'Moto adicionada =)')
        } catch (err) {
            showError(err)
        }
    }

    /*
    _alterName = async () => {
        try {
            await axios.post(`${server}/users`, {
                name: this.state.name
            })

            Alert.alert('Sucesso!', 'Nome alterado =)')
        } catch (err) {
            showError(err)
        }
    }
    */

    _Authentication() {
        if(this.state.name || this.state.model || this.state.password || this.state.confirmPassword) {
            return true
        } else {
            return false
        }
    }

    _Save() {
        const auth = this._Authentication()

        if(auth) {
            Alert.alert('Sucesso!', 'Dados alterados =)')
        } else {
            Alert.alert('Erro!', 'Nenhum dado inserido!')
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.textView}>

                    <Text style={styles.textEdit}>Alterar dados</Text>

                </View>

                <View style={styles.edit}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Alterar nome'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                        onChangeText={(name) => this._SaveName(name)}
                    />

                </View>

                <View style={styles.edit}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Alterar senha'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this._SavePassword(password)}
                    />

                </View>

                <View style={styles.edit}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Confirmar senha'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                        onChangeText={(confirmPassword) => this._SaveConfirmPassword(confirmPassword)}
                    />

                </View>

                <View style={styles.edit}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Adicionar moto'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                        onChangeText={(model) => this._SaveMotorcycle(model)}
                    />

                </View>

                <View style={styles.edit}>
                    <TouchableOpacity
                        style={styles.confirmButton}
                        onPress={() => this._Save() }
                    >
                        <Text style={styles.text}>Salvar</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}