import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, compose, createStore} from "redux"
import {rootReducer} from "./store/rootReducer";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga';
import sagas from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, compose(
    applyMiddleware(sagaMiddleware)
))
sagaMiddleware.run(sagas)

const app = (
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
)

render(app, document.getElementById('root'));


