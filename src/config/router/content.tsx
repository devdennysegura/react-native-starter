import React, { Component } from 'react'
import { StatusBar, View } from 'react-native'
import { Scene, Router, Stack } from 'react-native-router-flux'
import _ from './../../helpers/utilities'
import HelloWorld from './../../pages/testPage/'
import { getComponentStyle } from '../../helpers/stylesheet'
import style from './style'

const styles = getComponentStyle(style)
export default class BaseRouter extends Component<any, any> {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent={true} barStyle={'light-content'} />
                <Router>
                    <Stack key={'root'}>
                        <Scene key={'hello-world'} initial={true} component={HelloWorld} hideNavBar={true} />
                    </Stack>
                </Router>
            </View>
        )
    }
}