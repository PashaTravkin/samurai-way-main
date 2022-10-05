import {ActionsType} from "./ActionsType";


export type AuthType = {
    isAuth:boolean,
    id: number
    email: string,
    login: string
}

let initializeAuthState = {
    isAuth:true,
    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai'
}

const AuthReducer = (authState: AuthType = initializeAuthState, action: ActionsType): AuthType => {
    switch (action.type) {
        case 'SET_AUTH':
            return {
                ...authState, ...action.data
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