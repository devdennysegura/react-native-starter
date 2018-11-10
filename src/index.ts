import { AppRegistry } from 'react-native'
import App from './app'
import * as appName from './../app.json'
AppRegistry.registerComponent((appName as any).name, () => App)