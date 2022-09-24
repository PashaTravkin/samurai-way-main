import {ActionsType} from "./ActionsType";


export type MyPostPropsType = {
    id: number,
    message: string,
    likesCount: number
}

// export type chooseUserType = any

type ContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}

type PhotosType = {
    small: string,
    large: string
}

export type chooseUserType = {
    aboutMe: string
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

export type ProfilePageType = {
    newText: string
    postsData: Array<MyPostPropsType>
    chooseUser: chooseUserType
}




let initializeProfileState = {
    newText: '',
    postsData: [
        {id: 3, message: "Hello, how are you?", likesCount: 1},
        {id: 4, message: ' What\'s your name?', likesCount: 5}
    ],
    chooseUser: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: ""
        },
        lookingForAJob: true,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 0,
        photos: {
            small: "",
            large: ""
        }
    }
}

const ProfileReducer = (profileState: ProfilePageType = initializeProfileState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST':
            let messageAdd = {id: 7, message: profileState.newText, likesCount: 6}
            return {...profileState, postsData: [...profileState.postsData, messageAdd], newText: ''}
        case 'NEW_POST_TEXT':
            return {...profileState, newText: action.newText}
        case 'CHOOSE_USER':
            return {...profileState, chooseUser: action.chooseUser}
        default :
            return profileState
    }
}

export const addPostAC = () => ({type: 'ADD_POST'} as const)
//это короткая запись без return

export const onChangeTextHandlerAC = (text: string) => ({type: 'NEW_POST_TEXT', newText: text} as const)
//это короткая запись без return

export const setChooseUserProfileAC = (chooseUser: chooseUserType) => {
    return {
        type: 'CHOOSE_USER',
        chooseUser
    } as const
}

export default ProfileReducer;