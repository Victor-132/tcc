import React, { Component } from 'react'
import { View, Text} from 'react-native'
import styles from './style'

export default props => {
    return (
        <View style={styles.itensContainer}>
            <Text>{props.moto}</Text>
            <Text>{props.service}</Text>
            <Text>{props.madeIn}</Text>
        </View>
    )
}