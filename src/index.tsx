import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {states, addPosts} from "./App";

export let rerenderEntireTree=()=>{
    ReactDOM.render(
        <App state={states} addPost ={addPosts}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree()