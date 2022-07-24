import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {store, allAppPropsType} from "./Redux/State";

function App(props: allAppPropsType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className={"mainPages"}>
                <Route path={'/profile'} render={() =>
                    <Profile dispatch={props.dispatch}
                             postsData={props.state.profilePage.postsData}
                             newText={props.state.profilePage.newText}
                    />}
                />
                <Route path={'/dialogs'} render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
            <div>Hello, How are you?????</div>
        </div>
    );
}


export default App;
