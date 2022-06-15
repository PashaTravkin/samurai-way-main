import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./Redux/State";



// const postsData = [
//     {id: 3, message: "Hello, how are you?", likesCount: 1},
//     {id: 4, message: ' What\'s your name?', likesCount: 5}
// ]
// const dialogsData = [
//     {id: 1, name: 'Sasha'},
//     {id: 2, name: 'Masha'},
//     {id: 3, name: 'Lera'},
//     {id: 4, name: 'Nika'},
//     {id: 5, name: 'Dasha'}
// ]
// const messagesData = [
//     {id: 1, message: 'Hi, how are you???'},
//     {id: 2, message: 'I am ok thank you, and you?'},
//     {id: 3, message: 'I am fine too)'},
// ]


ReactDOM.render(
    <App appState={state}
         /*postsData={postsData}
         dialogsData={dialogsData}
         messagesData={messagesData}*//>,
    document.getElementById('root')
);