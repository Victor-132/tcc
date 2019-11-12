import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

export default props => {
    return (
        <View style={styles.itensContainer}>
            <Text style={styles.title}>{props.id_motorcycle}</Text>
            <Text style={styles.title}>{props.component}</Text>
            <Text style={styles.title}>{props.price}</Text>
        </View>
    )
}