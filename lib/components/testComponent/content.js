import React, { Component } from 'react';
import { Text } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { getComponentStyle } from '../../helpers/stylesheet';
import style from './style';
const styles = getComponentStyle(style);
export default class ButtonLogout extends Component {
    constructor(props) {
        super(props);
    }
    onPress() {
        console.log('hello worl');
    }
    render() {
        return (React.createElement(Ripple, { style: [styles.btn, styles.logout], onPress: this.onPress },
            React.createElement(Text, { style: styles.labelButton }, 'Test')));
    }
}
