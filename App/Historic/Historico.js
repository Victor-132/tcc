import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

import styles from './style'

export default class Historico extends Component {

    state = {
        items: [
            {
                id: Math.random(),
                value: 'Item 1'
            },
            {
                id: Math.random(),
                value: 'Item 2'
            },
            {
                id: Math.random(),
                value: 'Item 3'
            },
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.items}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Text style={styles.items}>{item.value}</Text>}
                />
            </View>
        )
    }
}
