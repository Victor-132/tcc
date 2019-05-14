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


export default class Login extends Component {

	state = {
		secure: true
	}

	_ChangeSecure(){
		this.setState({ secure: !this.state.secure })
	}

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

					<TextInput {...this.props}
						style={styles.userInput}
						type='password'
						placeholder={'Senha'}
						placeholderTextColor={'rgba(255,255,255,0.7)'}
						underlineColorAndroid='transparent'
						secureTextEntry={this.state.secure}
					/>

					<Icon
						name = {this.state.secure ? 'eye' : 'eye-slash'}
						size={26}
						color='rgba(255, 255, 255, 0.7)'
						onPress={() => this._ChangeSecure()}
					/>
				</View>

				<View style={styles.loginLinks}>

					<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('HomeScreen')}>
						<Text style={styles.signIn}>Entrar</Text>
					</TouchableOpacity>

					<Text style={styles.signUpText}>----------ou----------</Text>
					<Text style={styles.create} onPress={() => Linking.openURL('https://www.google.com')}>Crie uma conta</Text>

					<TouchableOpacity style={styles.passForg} onPress={() => Linking.openURL('https://www.google.com')}>
						<Text style={styles.textForg}>Esqueci minha senha</Text>
					</TouchableOpacity>

				</View>

			</View>
		)
	}
}