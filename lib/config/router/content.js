import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import HelloWorld from './../../pages/testPage/';
import { getComponentStyle } from '../../helpers/stylesheet';
import style from './style';
const styles = getComponentStyle(style);
export default class BaseRouter extends Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(StatusBar, { translucent: true, barStyle: 'light-content' }),
            React.createElement(Router, null,
                React.createElement(Stack, { key: 'root' },
                    React.createElement(Scene, { key: 'hello-world', initial: true, component: HelloWorld, hideNavBar: true })))));
    }
}
