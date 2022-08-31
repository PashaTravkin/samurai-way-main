import {ActionsType} from "./ActionsType";

export type UserType = {
    id: number,
    name: string,
    status: string,
    photos:{small:string, large:string}
    followed: boolean,

}
export type UsersPageType = {
    users: Array<UserType>
}

let initializeUsersState = {
    users: []
}

const UsersReducer = (userState: UsersPageType = initializeUsersState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOWING_UNFOLLOWING':
            return {
                ...userState, users: userState.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            }
        case 'SET_USERS':
       return  {...userState, users:[...userState.users, ...action.users]}
        default:
            return userState
    }
}

export const followingAC = (userID: number) => {
    return {
        type: 'FOLLOWING_UNFOLLOWING',
        userID: userID
    } as const
}

export const setUsersAC =(users:Array<UserType>)=>{
    return {
        type:'SET_USERS',
        users:users
    }as const


}

export default UsersReducer;