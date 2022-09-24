import React from 'react';
import s from './Users.module.css'
import ifUserNoPhoto from '../../assets/images/users.png'
import {UserType} from "../../Redux/UsersReducer";
import {NavLink} from "react-router-dom";

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
                        let onClickHandler = () => props.following(u.id)
                        return (
                            <div className={s.user}>
                                <div className={s.buttonImg}>
                                    <NavLink to={'/profile/{userId}'}>
                                        <img className={s.img} src={u.photos.small ? u.photos.small : ifUserNoPhoto &&
                                        u.photos.large ? u.photos.large : ifUserNoPhoto}
                                             alt="#"/>
                                    </NavLink>
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

export default Users;