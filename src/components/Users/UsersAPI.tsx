import React from 'react';
import {UsersContainerType} from "./UsersContainer";
import axios from "axios";
import Users from "./Users";
import isPreload from "../../common/Reload-1s-200px.svg"
import Preloader from "../Preloader/Preloader";

class UsersAPI extends React.Component<UsersContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })}

    onClickHandler = (pageNumber: number) => {
        this.props.setCurrentTarget(pageNumber)
        this.props.setPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                response && this.props.setPreloader(false)
                this.props.setUsers(response.data.items)
            })}

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: Array<number> = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return (
            <>
                {this.props.preloader ?
                    <Preloader PreloaderIMG={isPreload}/> :
                    <Users pages={pages}
                           users={this.props.usersPage.users}
                           onClickHandler={this.onClickHandler}
                           currentPage={this.props.currentPage}
                           following={this.props.following}
                    />}
            </>
        )
    }
}

export default UsersAPI;