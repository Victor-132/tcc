import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import Historic from '../Historic/Historic'
import Budget from '../Budget/Budget'
import EditProfile from '../EditProfile/EditProfile'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './style'

export default class HomeScreen extends Component {

    state = {
        view: (<Historic />)
    }

    //Código provisório----------------------------------------------------------------------------------------
    _SelectView(number) {
        let view = null
        if (number === 1) {
            view = (<Historic />)
        } else if (number === 2) {
            view = (<Budget />)
        }
        this.setState({ view })
    }
    //---------------------------------------------------------------------------------------------------------

    _EditProfile() {
        let view = null
        view = (<EditProfile />)
        this.setState({ view })
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.status}>
                    <Text style={styles.statusText}>Status de manutenção: </Text>
                    <Icon name='check-circle' size={26} color='green' />
                </View>

                <View style={styles.content}>
                    {this.state.view}
                </View>

                <View style={styles.iconsView}>

                    <TouchableOpacity style={styles.icon} onPress={() => this._SelectView(1)}>
                        <Icon name='history' size={26} color='rgba(255, 255, 255, 0.7)' />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon} onPress={() => this._SelectView(2)}>
                        <Icon name='file-invoice-dollar' size={26} color='rgba(255, 255, 255, 0.7)' />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon} onPress={() => this._EditProfile()}>
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