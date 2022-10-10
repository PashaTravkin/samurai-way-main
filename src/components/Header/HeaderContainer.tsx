import React from "react";
import axios from "axios";
import {Header} from "./Header";
import {setAuthAC} from "../../Redux/AuthReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {usersAPI} from "../../api/api";


export type AllPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component <AllPropsType> {

    componentDidMount = () => {
        usersAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
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
