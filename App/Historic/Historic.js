import React, { Component } from 'react'
import { View, FlatList, Alert } from 'react-native'

import styles from './style'
import axios from 'axios';
import { server, showError } from '../common'
import Itens from './Itens'

export default class Historic extends Component {

    state = {
        itens: []
    }

    componentDidMount = async () => {
        this._loadHistoric()
    }

    _loadHistoric = async () => {
        try {
            const res = await axios.get(`${server}/historic`)

            this.setState({ itens: res.data })
        } catch (err) {
            showError(err)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.itens}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => <Itens {...item}/> }
                />
            </View>
        )
    }
}
