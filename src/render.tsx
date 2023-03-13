import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType} from "./redux/state";


export  const rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <App state={state} addPostCallBack={addPost} />,
        document.getElementById('root')
    );
}

