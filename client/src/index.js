import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './redux/reducer';
import reduxThunk from 'redux-thunk';
import './index.css';
import App from './App';

const store=createStore(reducers,applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));


