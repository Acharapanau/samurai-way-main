import React from 'react';
import {state, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, updateNewPostText} from "./redux/state";


const rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <App updateNewPostText={updateNewPostText} state={state} addPostCallBack={addPost} />,
        document.getElementById('root')
    );
}



rerenderEntireTree(state);
subscribe(rerenderEntireTree);



