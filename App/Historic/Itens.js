import React, { Component } from 'react'
import { View, Text} from 'react-native'
import styles from './style'

export default props => {
    return (
        <View style={styles.itensContainer}>
            <Text style={styles.item}>{props.moto} | {props.service} | {props.date}</Text>
        </View>
    )
}