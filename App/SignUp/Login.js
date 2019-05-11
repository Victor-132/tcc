import React, { Component } from 'react'
import {
	Text,
	TextInput,
	View,
	TouchableOpacity,
	Image,
	ImageBackground,
	Linking,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style.js'
//import PasswordInputText from 'react-native-hide-show-password-input';
//import LoginButton from 'react-native-fbsdk';
//import ImageBackground from './Images/bgImage.jpg'
//import logo from './images/logo/jpg'

//          Função para botão de visibilidade
export default class Login extends Component {
	render() {
		return (

			<View style={styles.container}>

				<Text style={styles.welcome}>Bem-vindo ao X-Run</Text>

				<View style={styles.loginUser}>

					<Icon name='user' size={28} color='rgba(255, 255, 255, 0.7)'
						style={styles.inputIcon} />

					<TextInput
						style={styles.userInput}
						placeholder={'Nome de usuário'}
						placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
						underlineColorAndroid='transparent'
						keyboardType="ascii-capable"
					/>
				</View>

				<View style={styles.loginUser}>

					<Icon name='lock' size={26} color='rgba(255, 255, 255, 0.7)'
						style={styles.inputIcon} />

					<TextInput
						style={styles.userInput}
						type='password'
						placeholder={'Senha'}
						placeholderTextColor={'rgba(255,255,255,0.7)'}
						underlineColorAndroid='transparent'
						secureTextEntry={true}
					/>

				</View>
				<View>

					<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('HomeScreen')}>
						<Text style={styles.signIn}>Entrar</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.passForg} onPress={() => Linking.openURL('https://www.google.com')}>
						<Text style={styles.textForg}>Esqueceu sua senha?</Text>
					</TouchableOpacity>

				</View>

			</View>
		)
	}
}