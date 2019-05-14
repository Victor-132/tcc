
import React, { Component } from 'react'
import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native'

import styles from './Style.js'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Cadastro extends Component {

	state = {
		secure: true
	}

	_ChangeSecure() {
		this.setState({ secure: !this.state.secure })
	}

	render() {
		return (
			<View style={styles.container}>


				<Text style={styles.cadastro}>Cadastre-se</Text>


				<View style={styles.LoginUser}>

					<TextInput
						style={styles.userInput}
						placeholder={'Nome Completo'}
						placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
						underlineColorAndroid='transparent'
						keyboardType="ascii-capable"
					/>

				</View>

				<View style={styles.LoginUser}>
					<TextInput
						style={styles.userInput}
						placeholder={'Email'}
						placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
						underlineColorAndroid='transparent'
						keyboardType="ascii-capable"
					/>
				</View>

				<View style={styles.LoginUser}>
					<TextInput {...this.props}
						style={styles.userInput}
						type='password'
						placeholder={'Senha'}
						placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
						underlineColorAndroid='transparent'
						secureTextEntry={this.state.secure}
					/>

					<Icon style={styles.IconEye}
						name={this.state.secure ? 'eye' : 'eye-slash'}
						size={26}
						color='rgba(255, 255, 255, 0.7)'
						onPress={() => this._ChangeSecure()}
					/>
				</View>

				<View style={styles.LoginUser}>
					<TextInput {...this.props}
						style={styles.userInput}
						type='password'
						placeholder={'Confirme a Senha'}
						placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
						underlineColorAndroid='transparent'
						secureTextEntry={this.state.secure}
					/>

					<Icon style={styles.IconEye}
						name={this.state.secure ? 'eye' : 'eye-slash'}
						size={26}
						color='rgba(255, 255, 255, 0.7)'
						onPress={() => this._ChangeSecure()}
					/>
				</View>
				<View>
					<TouchableOpacity style={styles.button}
						onPress={() => this.props.navigation.navigate('HomeScreen')}>
						<Text style={styles.create}>Criar conta</Text>
					</TouchableOpacity>

				</View>

				<View style={styles.loginLinks}>

					<TouchableOpacity style={styles.account}
						onPress={() => this.props.navigation.navigate('Login')}>
						<Text style={styles.signIn} >Já tem uma conta? Entrar</Text>
					</TouchableOpacity>
				</View>

			</View>
		)
	}
}
