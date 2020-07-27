import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'},
]

let messages = [
    {id: 1, message: 'Hi!'},
    {id: 1, message: 'How is it-kamasutra?'},
    {id: 1, message: 'Yo!'},
    {id: 1, message: 'Yo!'},
    {id: 1, message: 'Yo!'},
    {id: 1, message: 'Yo!'},
]

let posts = [
    {id: '1', message: 'Hi, how are you?', likesCount: '12'},
    {id: '2', message: "It's my first post", likesCount: '22'},
    {id: '3', message: "Blalala", likesCount: '2'},
    {id: '4', message: "Cool", likesCount: '7'},
]


ReactDOM.render(
  <React.StrictMode>
    <App dialogs = {dialogs} messages = {messages} posts = {posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
