import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavbarContainer} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

function App() {
    debugger

    return (
        <div className="app-wrapper">
            <Header/>
            <NavbarContainer/>
            <div className={"mainPages"}>
                <Route path={'/profile'} render={() =>
                    <Profile/>}
                />
                <Route path={'/dialogs'} render={() =><DialogsContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
            <div>Hello, How are you?????</div>
        </div>
    );
}


export default App;
