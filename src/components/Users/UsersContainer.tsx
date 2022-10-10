import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {
    followingAC,
    setCurrentTargetAC, setDisableAC, setPreloaderAC,
    setTotalUsersCountAC,
    setUsersAC,
    UsersPageType,
    UserType
} from "../../Redux/UsersReducer";
import UsersAPI from "./UsersAPI";


export type UsersContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    usersPage: UsersPageType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    preloader:boolean,
    disable:boolean
}
type MapDispatchToPropsType = {
    following: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentTarget: (currentPages: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setPreloader: (preloader: boolean) => void
    setDisable:(disable:boolean)=>void
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        preloader:state.usersPage.isPreloader,
        disable:state.usersPage.isDisable

    }
}

export let UsersContainer = connect(mapStateToProps,
    {
        following: followingAC,
        setUsers: setUsersAC,
        setCurrentTarget: setCurrentTargetAC,
        setTotalUsersCount: setTotalUsersCountAC,
        setPreloader:setPreloaderAC,
        setDisable:setDisableAC
    })(UsersAPI)
