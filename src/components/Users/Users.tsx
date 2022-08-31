import React from 'react';
import s from './Users.module.css'
import {UsersContainerType} from "./UsersContainer";
import axios from "axios";
import ifUserNoPhoto from '../../assets/images/users.png'

class Users extends React.Component<UsersContainerType> {
    getUsers = () => {
        if (this.props.usersPage.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
                this.props.setUsers(response.data.items)
            })
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.getUsers}>getUsers</button>
                <div className={s.wrapper}>
                    {
                        this.props.usersPage.users.map(u => {
                            let onClickHandler = () => this.props.onClick(u.id)
                            return (
                                <div className={s.user}>
                                    <div className={s.buttonImg}>
                                        <img className={s.img} src={u.photos.small ? u.photos.small : ifUserNoPhoto}
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