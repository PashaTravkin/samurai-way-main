import React from 'react';
import s from './Users.module.css'
import {UsersContainerType} from "./UsersContainer";
import axios from "axios";
import ifUserNoPhoto from '../../assets/images/users.png'

class Users extends React.Component<UsersContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                debugger
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onClickHandler = (pageNumber: number) => {
        this.props.setCurrentTarget(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)

            })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: Array<number> = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }


        return (
            <div>
                <span className={s.wrapperP}>
                    {pages.map((p, index) => {
                    return (

                        <span onClick={() => this.onClickHandler(p)} key={index}
                              className={`${this.props.currentPage === p ? s.selectedPage : ''} ${s.item}`}>
                        {p}
                            {/*{p % 30 === 0 ? <br/> : ''}*/}
                    </span>
                    )
                })}
                </span>


                <div className={s.wrapper}>
                    {
                        this.props.usersPage.users.map(u => {
                            let onClickHandler = () => this.props.following(u.id)
                            return (
                                <div className={s.user}>
                                    <div className={s.buttonImg}>
                                        <img className={s.img} src={u.photos.small ? u.photos.small : ifUserNoPhoto &&
                                        u.photos.large ? u.photos.large : ifUserNoPhoto}
                                             alt="#"/>
                                        <div>
                                            <button className={s.button}
                                                    onClick={onClickHandler}>{u.followed ? 'FOLLOWED' : 'UNFOLLOWED'}</button>
                                        </div>
                                    </div>
                                    <div className={s.infoUser}>
                                        <div className={s.nameStatus}>
                                            <span>{u.name}</span>
                                            <span>{u.status ? u.status : 'status'}</span>
                                        </div>
                                        <div className={s.location}>
                                            <div>{'u.location.country'}</div>
                                            <div>{'u.location.city'}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
    ;
};

export default Users;