import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store, {StoreType} from "./Redux/ReduxStore";
import {Provider} from "./StoreContext";


export type rerenderEntireTreeType = (store:StoreType) => void

export let rerenderEntireTree: rerenderEntireTreeType = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree(store)
store.subscribe(() => rerenderEntireTree(store))