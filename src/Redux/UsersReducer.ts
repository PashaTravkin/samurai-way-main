import {ActionsType} from "./ActionsType";

export type UserType = {
    id: number,
    name: string,
    status: string,
    photos:{small:string, large:string}
    followed: boolean,
}



export type UsersPageType = {
    users: Array<UserType>,
    pageSize:number,
    totalUsersCount:number,
    currentPage:number
    isPreloader:boolean
}

let initializeUsersState = {
    users: [],
    pageSize:50,
    totalUsersCount:0,
    currentPage:1,
    isPreloader:false,
    chooseUser:[]
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
       return  {...userState, users:[...action.users]}
        case 'SET_CURRENT_TARGET':
            return {...userState, currentPage:action.currentPage}
        case 'SET_TOTAL_USERS_COUNT':
            return {...userState, totalUsersCount:action.totalUsersCount}
        case 'PRELOADER':
            return {...userState, isPreloader:action.isPreloader}
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

export const setCurrentTargetAC =(currentPage:number)=>{
    return {
        type:'SET_CURRENT_TARGET',
        currentPage:currentPage
    }as const
}

export const setTotalUsersCountAC =(totalUsersCount:number)=>{
    return {
        type:'SET_TOTAL_USERS_COUNT',
        totalUsersCount:totalUsersCount
    }as const
}

export const setPreloaderAC =(isPreloader:boolean)=>{
    return {
        type:'PRELOADER',
        isPreloader:isPreloader
    }as const
}



export default UsersReducer;