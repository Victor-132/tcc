import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'

import styles from './style'
import axios from 'axios'
import { server, showError } from '../common'
import Itens from './Itens'

export default class Budget extends Component {

    state = {
        itens: []
    }

    componentDidMount = async () => {
        this._LoadBudget()
    }

    _LoadBudget = async () => {
        try {
            const res = await axios.get(`${server}/budget`)

            this.setState({ itens: res.data })
        } catch (err) {
            showError(err)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{fontWeight: 'bold'}}>Moto</Text>
                    <Text style={{fontWeight: 'bold'}}>Item</Text>
                    <Text style={{fontWeight: 'bold'}}>Preço</Text>
                </View>
                <FlatList 
                    data={this.state.itens}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => <Itens {...item}/>}
                />
            </View>
        )
    }
}
