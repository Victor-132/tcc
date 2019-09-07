import React from 'react'
import { View, Text} from 'react-native'
import styles from './style'

export default props => {
    return (
        <View style={styles.itensContainer}>
            <Text style={styles.item}>{props.item} | {props.price}</Text>
        </View>
    )
}