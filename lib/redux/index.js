import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import rootEpic from './api';
import reducers from './reducer';
const loggerMiddleware = createLogger({
    predicate: () => __DEV__,
    collapsed: true,
    duration: true
});
const epicMiddleware = createEpicMiddleware();
const middlewares = [thunk, loggerMiddleware, epicMiddleware];
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};
const persistedReducer = persistReducer(persistConfig, reducers());
export default () => {
    const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));
    const persistor = persistStore(store);
    epicMiddleware.run(rootEpic);
    return { store, persistor };
};
