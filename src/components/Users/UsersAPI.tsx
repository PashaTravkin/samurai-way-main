import React from 'react';
import {UsersContainerType} from "./UsersContainer";
import Users from "./Users";

import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersAPI extends React.Component<UsersContainerType> {

    componentDidMount() {

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onClickHandler = (pageNumber: number) => {
        this.props.setCurrentTarget(pageNumber)
        this.props.setPreloader(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then((data) => {
                data && this.props.setPreloader(false)
                this.props.setUsers(data.items)
            })
    }


    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: Array<number> = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return (
            <>
                {this.props.preloader ?
                    <Preloader/> :
                    <Users pages={pages}
                           users={this.props.usersPage.users}
                           onClickHandler={this.onClickHandler}
                           currentPage={this.props.currentPage}
                           following={this.props.following}
                           disable={this.props.disable}
                           setDisable={this.props.setDisable}
                    />}
            </>
        )
    }
}

export default UsersAPI;