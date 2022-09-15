import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {
    followingAC,
    setCurrentTargetAC, setPreloaderAC,
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
    preloader:boolean
}
type MapDispatchToPropsType = {
    following: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentTarget: (currentPages: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setPreloader: (preloader: boolean) => void
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        preloader:state.usersPage.isPreloader
    }
}

export let UsersContainer = connect(mapStateToProps,
    {
        following: followingAC,
        setUsers: setUsersAC,
        setCurrentTarget: setCurrentTargetAC,
        setTotalUsersCount: setTotalUsersCountAC,
        setPreloader:setPreloaderAC
    })(UsersAPI)
