import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Flux from './redux';
import Router from './config/router/';
const applicationFlux = Flux();
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(Provider, { store: applicationFlux.store },
            React.createElement(PersistGate, { loading: null, persistor: applicationFlux.persistor },
                React.createElement(Router, null))));
    }
}
