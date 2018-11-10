import React, { Component } from 'react'
import { View } from 'react-native'
import { getComponentStyle } from '../../helpers/stylesheet'
import style from './style'
import Test from '../../components/testComponent'

const styles = getComponentStyle(style)
export default class TestPage extends Component<any, any> {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // todo
    }
    render() {
        return (
            <View style={styles.container}>
                <Test/>
            </View>
        )
    }
}