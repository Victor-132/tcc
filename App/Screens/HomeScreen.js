import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import Historico from '../Historic/Historico'
import Budget from '../Orcamento/Budget'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

export default class HomeScreen extends Component {

    state = {
        view: (<Historico />)
    }

    //Código provisório----------------------------------------------------------------------------------------
    _SelectView(number) {
        let view = null
        if (number === 1) {
            view = (<Historico />)
        } else if (number === 2) {
            view = (<Budget />)
        }
        this.setState({ view })
    }
    //---------------------------------------------------------------------------------------------------------

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