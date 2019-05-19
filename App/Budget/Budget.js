import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

import styles from './style'

export default class Budget extends Component {
    
    state = {
        items: [
            {
                id: Math.random(),
                number: 'Item 1',
                desc: 'Válvula de yamaha',
                value: 'R$1200,00'
            },
            {
                id: Math.random(),
                number: 'Item 1',
                desc: 'Válvula de yamaha',
                value: 'R$1200,00'
            },
            {
                id: Math.random(),
                number: 'Item 1',
                desc: 'Válvula de yamaha',
                value: 'R$1200,00'
            },
            {
                id: Math.random(),
                number: 'Item 1',
                desc: 'Válvula de yamaha',
                value: 'R$1200,00'
            },
            {
                id: Math.random(),
                number: 'Item 1',
                desc: 'Válvula de yamaha',
                value: 'R$1200,00'
            },
            {
                id: Math.random(),
                number: 'Item 1',
                desc: 'Válvula de yamaha',
                value: 'R$1200,00'
            },
            {
                id: Math.random(),
                number: 'Item 1',
                desc: 'Válvula de yamaha',
                value: 'R$1200,00'
            },
            {
                id: Math.random(),
                number: 'Item 1',
                desc: 'Válvula de yamaha',
                value: 'R$1200,00'
            },
            {
                id: Math.random(),
                number: 'Item 1',
                desc: 'Válvula de yamaha',
                value: 'R$1200,00'
            },
            {
                id: Math.random(),
                number: 'Item 1',
                desc: 'Válvula de yamaha',
                value: 'R$1200,00'
            },
            {
                id: Math.random(),
                number: 'Item 1',
                desc: 'Válvula de yamaha',
                value: 'R$1200,00'
            },
            {
                id: Math.random(),
                number: 'Item 1',
                desc: 'Válvula de yamaha',
                value: 'R$1200,00'
            },
            {
                id: Math.random(),
                number: 'Item 1',
                desc: 'Válvula de yamaha',
                value: 'R$1200,00'
            },
            {
                id: Math.random(),
                number: 'Item 1',
                desc: 'Válvula de yamaha',
                value: 'R$1200,00'
            },
            {
                id: Math.random(),
                number: 'Item 1',
                desc: 'Válvula de yamaha',
                value: 'R$1200,00'
            }
        ]
    }
    
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{color: 'white', marginLeft: '10%', marginRight: '25%', marginTop: 10}}>Id</Text>
                    <Text style={{color: 'white', marginRight: '20%', marginTop: 10}}>Descrição</Text>
                    <Text style={{color: 'white', marginTop: 10}}>Valor</Text>
                </View>
                <FlatList
                    data={this.state.items}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Text style={styles.items}>{item.number}  |  {item.desc}  |  {item.value}</Text>} 
                />
            </View>
        )
    }
}