import React from 'react';
import axios from "axios";

const instance = axios.create({
    withCredentials: true,  //with credentials--с полномочиями для кроссдоменных запросов
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "f01b381b-4376-4ff2-8452-c680d96141e5"}
})

export let usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },

    setFollowed(id: number) {
        return (
            instance.post(`follow/${id}`)
                .then(response => response.data)
        )
    },

    setUnfollowed(id: number) {
        return (
            instance.delete(`follow/${id}`)
                .then(response => response.data)
        )
    },

    setUserInProfile(userId: string) {
        return (
            instance.get(`profile/` + userId)
                .then(response => response.data)
        )
    },

    authMe(){
        return(
            instance.get('https://social-network.samuraijs.com/api/1.0/auth/me')
                .then(response=>response.data)
        )
    }
}

