import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props: any) {
    debugger

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.store.getState().sidebar}/>
            <div className={"mainPages"}>
                <Route path={'/profile'} render={() =>
                    <Profile store={props.store}
                        // dispatch={props.store.dispatch}
                        //      postsData={props.store.getState().profilePage.postsData}
                        //      newText={props.store.getState().profilePage.newText}
                    />}
                />
                <Route path={'/dialogs'} render={() =>
                    <DialogsContainer store={props.store}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
            <div>Hello, How are you?????</div>
        </div>
    );
}


export default App;
