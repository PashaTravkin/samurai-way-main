import React from 'react';
import s from './Users.module.css'
import ifUserNoPhoto from '../../assets/images/users.png'
import {UserType} from "../../Redux/UsersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

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

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {"API-KEY": "f01b381b-4376-4ff2-8452-c680d96141e5"}
                                }).then(response => {
                                    debugger
                                    if(response.data.resultCode===0){
                                        props.following(u.id)
                                    }
                                }):

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {"API-KEY": "f01b381b-4376-4ff2-8452-c680d96141e5"}
                                }).then(response => {
                                    debugger
                                    if(response.data.resultCode===0){
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