import React, { Component } from 'react'
import {
    Alert,
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native'
import styles from './style'

export default class EditProfile extends Component {
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
                    />

                </View>
                <View style={styles.edit}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Alterar senha'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                    />

                </View>

                <View style={styles.edit}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Adicionar moto'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                    />

                </View>
                <View style={styles.edit}>
                    <TouchableOpacity
                        style={styles.confirmButton}>
                        onPress={() => {
                            this.props.navigation.navigate('HomeScreen')
                            Alert.alert('Alterações salvas')
                        }
                        }
                        <Text style={styles.text}>Salvar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cancelBtn}
                        onPress={() => {
                            this.props.navigation.navigate('HomeScreen')
                        }
                        }
                    >
                        <Text style={styles.text}>Cancelar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}