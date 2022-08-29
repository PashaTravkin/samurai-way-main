import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../Redux/ReduxStore";
import {followingAC, setUsersAC, UsersPageType, UserType} from "../../Redux/UsersReducer";
import {Dispatch} from "redux";


export type UsersContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    usersPage: UsersPageType
}
type MapDispatchToPropsType = {
    onClick: (userID: number) => void
    setUsers:(users:Array<UserType>)=>void
}


const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        usersPage:state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onClick: (userID: number) => {
            dispatch(followingAC(userID))
        },
        setUsers:(users:Array<UserType>)=> {
            dispatch(setUsersAC(users))
        }
    }
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
