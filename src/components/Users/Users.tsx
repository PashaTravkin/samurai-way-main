import React from 'react';
import s from './Users.module.css'
import {UsersContainerType} from "./UsersContainer";
import axios from "axios";
import ifUserNoPhoto from '../../assets/images/users.png'

const Users = (props: UsersContainerType) => {
let getUsers =()=>{
    if (props.usersPage.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
            props.setUsers(response.data.items)
            debugger
        })

        // props.setUsers([
        //     {
        //         id: 1,
        //         fullName: 'Dima.K',
        //         status: 'I am a big boss',
        //         followed: true,
        //         location: {city: 'Minsk', country: 'Belarus'},
        //         img: 'https://cdn.freelance.ru/images/att/1324133_900_600.png'
        //     },
        //     {
        //         id: 2,
        //         fullName: 'Pasha.T',
        //         status: 'I am a big boss to',
        //         followed: false,
        //         location: {city: 'Moscow', country: 'Russia'},
        //         img: 'https://cdn.freelance.ru/images/att/1324133_900_600.png'
        //     },
        //     {
        //         id: 3,
        //         fullName: 'Lena.S',
        //         status: 'I am a big boss to to',
        //         followed: true,
        //         location: {city: 'Kiev', country: 'Ukraine'},
        //         img: 'https://cdn.freelance.ru/images/att/1324133_900_600.png'
        //     }])
    }
}


    return (
        <div>
            <button onClick={getUsers}>getUsers</button>
            <div className={s.wrapper}>
                {
                    props.usersPage.users.map(u => {
                        let onClickHandler = () => props.onClick(u.id)
                        return (
                            <div className={s.user}>
                                <div className={s.buttonImg}>
                                    <img className={s.img} src={u.photos.small?u.photos.small:ifUserNoPhoto} alt="#"/>
                                    <div>
                                        <button className={s.button}
                                                onClick={onClickHandler}>{u.followed ? 'FOLLOWED' : 'UNFOLLOWED'}</button>
                                    </div>
                                </div>
                                <div className={s.infoUser}>
                                    <div className={s.nameStatus}>
                                        <span>{u.name}</span>
                                        <span>{u.status?u.status:'status' }</span>
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
    );
};

export default Users;