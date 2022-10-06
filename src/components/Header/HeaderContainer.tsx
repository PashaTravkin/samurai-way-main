import React from "react";
import axios from "axios";
import {Header} from "./Header";
import {setAuthAC} from "../../Redux/AuthReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";


export type AllPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component <AllPropsType> {

    componentDidMount = () => {
        axios.get('https://social-network.samuraijs.com/api/1.1/auth/me', {withCredentials: true})// with credentials--с полномочиями для кроссдоменных запросов

            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthAC(id, email, login)
                }
                debugger
            })

    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }

}

export type mapDispatchToPropsType = {
    setAuthAC: (id: number, email: string, login: string) => void
}


export type mapStateToPropsType = {
    id: number,
    email: string,
    login: string,
    isAuth:boolean
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setAuthAC})(HeaderContainer)
