import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./config/redux";
import './index.css';
import App from './App';

const AppCliennt = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<AppCliennt />, document.getElementById('root'));
