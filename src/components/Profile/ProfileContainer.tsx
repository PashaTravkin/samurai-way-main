import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {chooseUserType, setChooseUserProfileAC} from "../../Redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

type PasParamsType = {
    userId:string // типизируем часть адресной строку браузера
}

export type ProfileContainerType = MapStateToPropsType & mapDispatchToPropsType

type AllPropsType = RouteComponentProps<PasParamsType> & ProfileContainerType

class ProfileContainerAPI extends React.Component<AllPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId=JSON.stringify(this.props.myId)
        }
        usersAPI.setUserInProfile(userId)
            .then(data => {
                this.props.setChooseUserProfileAC(data)
            })
    }

    render() {
        return (
            <>
                <Profile {...this.props}/>
            </>
        )
    }
}

type MapStateToPropsType = {
    chooseUser: chooseUserType
    myId:number
}

export type mapDispatchToPropsType = {
    setChooseUserProfileAC: (chooseUser: chooseUserType) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        chooseUser: state.profilePage.chooseUser,
        myId:state.auth.id
    }
}

let WithURLContainerComponent = withRouter(ProfileContainerAPI)

export default connect(mapStateToProps, {setChooseUserProfileAC})(WithURLContainerComponent)