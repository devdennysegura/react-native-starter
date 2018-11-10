import React, { Component } from 'react'
import { Text } from 'react-native'
import Ripple from 'react-native-material-ripple'
import { getComponentStyle } from '../../helpers/stylesheet'

import style from './style'
const styles = getComponentStyle(style)
export default class ButtonLogout extends Component<any, any> {
    constructor(props) {
        super(props)
    }
    onPress() {
        console.log('hello worl');
    }
    render() {
        return (
            <Ripple style={[styles.btn, styles.logout]}
                onPress={this.onPress}>
                <Text style={styles.labelButton}>{'Test'}</Text>
            </Ripple>
        )
    }
}