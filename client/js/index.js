/* global document */

import styles from '../scss/styles.scss'; // eslint-disable-line no-unused-vars
import * as reducers from './state/reducers';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import createLogger from 'redux-logger';
import {initialState} from './state/actions';
import NES from 'nes/client';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Letters from './components/alphabet/';
import Template from './components/template';
import Tiles from './components/tiles';

let store;



/* establish a new websocket connection with the server */
const client = new NES.Client('ws://localhost:3000');
const logger = createLogger();



function renderApplication() {
    ReactDOM.render((
        <Provider store={store}>
            <Template>
                <Tiles />
                <Letters />
            </Template>
        </Provider>
    ), document.getElementById('inject'));
}



client.connect((err) => {
    if (err) {
        throw new Error(err);
    }
    client.request('/word', (error, payload) => {
        if (error) {
            throw new Error(error);
        }

        store = createStore(combineReducers(reducers), applyMiddleware(logger));
        store.subscribe(renderApplication);
        store.dispatch(initialState(payload));
    });
});
