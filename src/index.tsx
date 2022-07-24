import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";

export type rerenderEntireTreeType = ()=>void

export let rerenderEntireTree:rerenderEntireTreeType = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                // newPostText={store.dispatch.bind(store)}
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
                // addPost={store.dispatch.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)