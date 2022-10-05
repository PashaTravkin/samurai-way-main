import React from 'react';
import './App.css';
import {NavbarContainer} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <NavbarContainer/>
            <div className={"mainPages"}>
                <Route path={'/profile/:userId?'} render={() =><ProfileContainer/>}/>
                <Route path={'/dialogs'} render={() =><DialogsContainer/>}/>
                <Route path={'/users'} render={() =><UsersContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
            <div>Hello, How are you?????</div>
        </div>
    );
}


export default App;
