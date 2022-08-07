import {ActionsType} from "./ActionsType";


export type MyPostPropsType = {
    id: number,
    message: string,
    likesCount: number
}

export type ProfilePageType = {
    newText: string
    postsData: Array<MyPostPropsType>,
}

let initializeProfileState = {
    newText: '',
    postsData: [
        {id: 3, message: "Hello, how are you?", likesCount: 1},
        {id: 4, message: ' What\'s your name?', likesCount: 5}
    ]
}

const ProfileReducer = (profileState:ProfilePageType=initializeProfileState, action:ActionsType):ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST':
            let messageAdd = {id: 7, message: profileState.newText, likesCount: 6}
            profileState.postsData.push(messageAdd)
            profileState.newText = ''
            return profileState
        case 'NEW_POST_TEXT':
            profileState.newText = action.newText
            return profileState
        default :
            return profileState
    }
}

export const addPostAC = () => ({type: 'ADD_POST'} as const)
//это короткая запись без return

export const onChangeTextHandlerAC = (text: string) => ({type: 'NEW_POST_TEXT', newText: text} as const)
//это короткая запись без return

export default ProfileReducer;