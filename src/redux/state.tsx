import {rerenderEntireTree} from "../render";

export type MessageType = {
    id: number
    message: string
}


export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    post: string
    LikesCount: number
}

export type profilePageType = {
    posts: Array<PostType>
}

export type dialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, post: 'Hi, how are you?', LikesCount: 12},
            {id: 2, post: 'Its my first post', LikesCount: 11},]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}],
        dialogs: [
            {id: 1, name: 'Anton'},
            {id: 2, name: 'Dimych'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}]
    }

}
export const addPost = (postText: string ) => {
    const newPost: PostType = {
        id: new Date().getTime(),
        post: postText,
        LikesCount: 0
    };
    state.profilePage.posts.push(newPost);

    rerenderEntireTree(state)
}

