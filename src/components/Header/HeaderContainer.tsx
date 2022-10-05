import React from "react";
import axios from "axios";
import {Header} from "./Header";
import {setAuthAC} from "../../Redux/AuthReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";


export type AllPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component <AllPropsType> {

    componentDidMount = () => {
        axios.get('https://social-network.samuraijs.com/api/1.1/auth/me', {withCredentials:true})// with credentials--с полномочиями для кроссдоменных запросов

            .then(response => {

                this.props.setAuthAC(response.data.data.id, response.data.data.email, response.data.data.login)
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
        login: string
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
            id: state.auth.id,
            email: state.auth.email,
            login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthAC})(HeaderContainer)
