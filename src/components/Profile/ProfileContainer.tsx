import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {chooseUserType, setChooseUserProfileAC} from "../../Redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PasParamsType = {
    userId:string // типизируем часть адресной строку браузера
}

export type ProfileContainerType = MapStateToPropsType & mapDispatchToPropsType

type AllPropsType = RouteComponentProps<PasParamsType> & ProfileContainerType

class ProfileContainerAPI extends React.Component<AllPropsType> {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if(!userId){
            userId='2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setChooseUserProfileAC(response.data)
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
}

export type mapDispatchToPropsType = {
    setChooseUserProfileAC: (chooseUser: chooseUserType) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        chooseUser: state.profilePage.chooseUser
    }
}

let WithURLContainerComponent = withRouter(ProfileContainerAPI)

export default connect(mapStateToProps, {setChooseUserProfileAC})(WithURLContainerComponent)



// export let Profile= () => {
//     return (
//         < div className={classes.content}>
//             <div className={classes.mainImgInContent}><img
//                 src="https://besthqwallpapers.com/Uploads/31-3-2021/160338/thumb2-social-networks-blue-background-social-networks-icons-blue-light-globe-global-networks.jpg"
//                 alt=""/></div>
//             <div className={classes.workingArea}>
//                 <ProfileInfo/>
//                 <MyPostsContainer/>
//             </div>
//         </div>
//     )
// }

