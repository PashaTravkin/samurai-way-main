import {ActionsType} from "./ActionsType";

export type UserType = {
    id: number,
    fullName: string,
    status: string,
    followed: boolean,
    location: { city: string, country: string },
    img: string
}
export type UsersPageType = {
    users: Array<UserType>
}

let initializeUsersState = {
    users: [
        // {
        //     id: 1,
        //     fullName: 'Dima.K',
        //     status: 'I am a big boss',
        //     followed: true,
        //     location: {city: 'Minsk', country: 'Belarus'},
        //     img:'https://storage.myseldon.com/yugo/720_D4BEA7A6563A906B97E39D54FAE44967.png'
        // },
        // {
        //     id: 2,
        //     fullName: 'Pasha.T',
        //     status: 'I am a big boss to',
        //     followed: false,
        //     location: {city: 'Moscow', country: 'Russia'},
        //     img:'https://storage.myseldon.com/yugo/720_D4BEA7A6563A906B97E39D54FAE44967.png'
        // },
        // {
        //     id: 3,
        //     fullName: 'Lena.S',
        //     status: 'I am a big boss to to',
        //     followed: true,
        //     location: {city: 'Kiev', country: 'Ukraine'},
        //     img:'https://storage.myseldon.com/yugo/720_D4BEA7A6563A906B97E39D54FAE44967.png'
        // }
    ]
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