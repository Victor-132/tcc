import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.status}>
                    <Text style={styles.statusText}>Status: </Text>
                    <Icon name='check-circle' size={26} color='green' />
                </View>

                <View style={styles.iconsView}>

                    <TouchableOpacity style={styles.icon}>
                        <Icon name='history' size={26} color='rgba(255, 255, 255, 0.7)' />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon}>
                        <Icon name='file-invoice-dollar' size={26} color='rgba(255, 255, 255, 0.7)' />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon}>
                        <Icon name='user-edit' size={26} color='rgba(255, 255, 255, 0.7)' />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon}>
                        <Icon name='comment' size={26} color='rgba(255, 255, 255, 0.7)' />
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}