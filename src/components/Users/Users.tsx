import React from 'react';
import s from './Users.module.css'
import ifUserNoPhoto from '../../assets/images/users.png'
import {UserType} from "../../Redux/UsersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type usersType = {
    pages: Array<number>,
    users: Array<UserType>
    onClickHandler: (pageNumber: number) => void
    currentPage: number
    following: (userID: number) => void

}

let Users = (props: usersType) => {

    return (
        <div>
                       <span className={s.wrapperP}>
                    {props.pages.map((p, index) => {
                        return (
                            <span onClick={() => props.onClickHandler(p)} key={index}
                                  className={`${props.currentPage === p ? s.selectedPage : ''} ${s.item}`}>
                        {p}
                    </span>
                        )
                    })}
                </span>


            <div className={s.wrapper}>
                {
                    props.users.map(u => {
                        let onClickHandler = () => {
                            u.followed ?

                                usersAPI.setUnfollowed(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.following(u.id)
                                        }
                                    }) :

                                usersAPI.setFollowed(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.following(u.id)
                                    }
                                })
                        }
                        return (
                            <div className={s.user}>
                                <div className={s.buttonImg}>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img className={s.img} src={u.photos.small ? u.photos.small : ifUserNoPhoto &&
                                        u.photos.large ? u.photos.large : ifUserNoPhoto}
                                             alt="#"/>
                                    </NavLink>
                                    <div>
                                        <button className={s.button}
                                                onClick={onClickHandler}>{u.followed ? 'UNFOLLOWED' : 'FOLLOWED'}</button>
                                    </div>
                                </div>
                                <div className={s.infoUser}>
                                    <div className={s.nameStatus}>
                                        <span className={s.status}>{u.name}</span>
                                        <span className={s.status}>{u.status ? u.status : 'status'}</span>
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

export default Users;