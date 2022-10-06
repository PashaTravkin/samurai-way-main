import {ActionsType} from "./ActionsType";


export type AuthType = {
    isAuth:boolean,
    id: number
    email: string,
    login: string
}

let initializeAuthState = {
    isAuth:false,
    id: 0,
    email: '',
    login: ''
}

const AuthReducer = (authState: AuthType = initializeAuthState, action: ActionsType): AuthType => {
    switch (action.type) {
        case 'SET_AUTH':
            return {
                ...authState, ...action.data, isAuth:true
            }

        default :
            return authState
    }
}

export const setAuthAC = (id:number,email:string,login:string) => {
    return {
        type: 'SET_AUTH',
        data:{
            id,
            email,
            login
        }

    } as const
}

export default AuthReducer;