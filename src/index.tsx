import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/ReduxStore";


export type rerenderEntireTreeType = (store:any)=>void

export let rerenderEntireTree:rerenderEntireTreeType = (store:any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree(store)
store.subscribe(()=>rerenderEntireTree(store))