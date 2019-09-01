import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './style'

export default class EditProfile extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.edit}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Editar nome'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                     />
                    <TouchableOpacity style={styles.confirmButton}>
                        <Text style={styles.text}>Salvar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.edit}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Editar senha'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                    />
                    <TouchableOpacity style={styles.confirmButton}>
                        <Text style={styles.text}>Salvar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.edit}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Adicionar moto'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                    />
                    <TouchableOpacity style={styles.confirmButton}>
                        <Text style={styles.text}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}