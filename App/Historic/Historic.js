import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

import styles from './style'

export default class Historic extends Component {

    state = {
        items: [
            {
                id: Math.random(),
                value: 'Item 1',
                date: '18/05/2019',
                desc: 'Troca de relação'
            },
            {
                id: Math.random(),
                value: 'Item 2',
                date: '18/05/2019',
                desc: 'Troca de relação'
            },
            {
                id: Math.random(),
                value: 'Item 4',
                date: '18/05/2019',
                desc: 'Troca de relação'
            },
            {
                id: Math.random(),
                value: 'Item 5',
                date: '18/05/2019',
                desc: 'Troca de relação'
            },
            {
                id: Math.random(),
                value: 'Item 6',
                date: '18/05/2019',
                desc: 'Troca de relação'
            },
            {
                id: Math.random(),
                value: 'Item 7',
                date: '18/05/2019',
                desc: 'Troca de relação'
            },
            {
                id: Math.random(),
                value: 'Item 8',
                date: '18/05/2019',
                desc: 'Troca de relação'
            },
            {
                id: Math.random(),
                value: 'Item 9',
                date: '18/05/2019',
                desc: 'Troca de relação'
            },
            {
                id: Math.random(),
                value: 'Item 10',
                date: '18/05/2019',
                desc: 'Troca de relação'
            },
            {
                id: Math.random(),
                value: 'Item 11',
                date: '18/05/2019',
                desc: 'Troca de relação'
            },
            {
                id: Math.random(),
                value: 'Item 12',
                date: '18/05/2019',
                desc: 'Troca de relação'
            },
            {
                id: Math.random(),
                value: 'Item 13',
                date: '18/05/2019',
                desc: 'Troca de relação'
            },
            {
                id: Math.random(),
                value: 'Item 14',
                date: '18/05/2019',
                desc: 'Troca de relação'
            },
            {
                id: Math.random(),
                value: 'Item 15',
                date: '18/05/2019',
                desc: 'Troca de relação'
            },
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{color: 'white', marginLeft: '10%', marginRight: '25%', marginTop: 10}}>Id</Text>
                    <Text style={{color: 'white', marginRight: '20%', marginTop: 10}}>Data</Text>
                    <Text style={{color: 'white', marginTop: 10}}>Descrição</Text>
                </View>
                <FlatList
                    data={this.state.items}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Text style={styles.items}>{item.value}  |  {item.date}  |  {item.desc}</Text>} 
                />
            </View>
        )
    }
}
