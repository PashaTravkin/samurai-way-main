import {ActionsType, profilePageType} from "./State";

const ProfileReducer = (profileState:profilePageType, action:ActionsType) => {
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

export default ProfileReducer;