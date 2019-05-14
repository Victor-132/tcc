import React, { Component } from 'react'
import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Linking
} from 'react-native'

import styles from './Style'


export default class Forgotten extends Component {
	render() {
		return (
			<View style={styles.container}>

				<Text style={styles.text}>Insira seu endereço de e-mail para que possamos lhe enviar as instruções de recuperação de senha</Text>

				<View style={styles.LoginUser}>

					<TextInput
						style={styles.userInput}
						placeholder={'Insira o endereço de e-mail aqui'}
						placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
						underlineColorAndroid='transparent'
						keyboardType="ascii-capable"
					/>

				</View>

				<View style={styles.loginLinks}>
					<TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.google.com')}>
						<Text style={styles.Recover}>Continuar</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.buttonCancel} onPress={() => this.props.navigation.navigate('Login')}>
						<Text style={styles.Cancel}>Cancelar</Text>
					</TouchableOpacity>
				</View>

			</View>
		)
	}
}
