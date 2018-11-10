import React, { Component } from 'react';
import { View } from 'react-native';
import { getComponentStyle } from '../../helpers/stylesheet';
import style from './style';
import Test from '../../components/testComponent';
const styles = getComponentStyle(style);
export default class TestPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Test, null)));
    }
}
