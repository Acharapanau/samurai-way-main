import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Post from "./components/Profile/MyPosts/Post/Post";


let posts = [
    {id: 1, post: 'Hi, how are you?', LikesCount: 12},
    {id: 2, post: 'Its my first post', LikesCount: 11},]

let dialogs = [
    {id: 1, name: 'Anton'},
    {id: 2, name: 'Dimych'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}]


ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById('root')
);