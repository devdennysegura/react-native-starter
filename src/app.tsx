import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Flux from './redux'
import Router from './config/router/';

const applicationFlux = Flux()
export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Provider store={applicationFlux.store}>
                <PersistGate loading={null} persistor={applicationFlux.persistor}>
                    <Router />
                </PersistGate>
            </Provider>
        )
    }
}