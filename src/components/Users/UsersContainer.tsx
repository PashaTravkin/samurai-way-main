import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {
    followingAC,
    setCurrentTargetAC,
    setTotalUsersCountAC,
    setUsersAC,
    UsersPageType,
    UserType
} from "../../Redux/UsersReducer";
import {Dispatch} from "redux";
import Users from "./Users";


export type UsersContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    usersPage: UsersPageType,
    pageSize:number,
    totalUsersCount: number,
    currentPage:number
}
type MapDispatchToPropsType = {
    onClick: (userID: number) => void
    setUsers:(users:Array<UserType>)=>void
    setCurrentTarget:(currentPages:number)=>void
    setTotalUsersCount:(totalUsersCount:number)=>void
}


const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        usersPage:state.usersPage,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onClick: (userID: number) => {
            dispatch(followingAC(userID))
        },
        setUsers:(users:Array<UserType>)=> {
            dispatch(setUsersAC(users))
        },
        setCurrentTarget:(currentPages:number)=>{
            dispatch(setCurrentTargetAC(currentPages))
        },
        setTotalUsersCount:(totalUsersCount:number)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
