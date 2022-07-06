import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import  {state, addPost, allAppPropsType} from "./Redux/State";

export let states = state
export let addPosts = addPost

   function App(props: allAppPropsType) {

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Navbar state={props.state.sidebar}/>
                    <div className={"mainPages"}>
                        <Route path={'/profile'} render={() =>
                            <Profile addPost={addPost} postsData={props.state.profilePage.postsData}/>}/>
                        <Route path={'/dialogs'} render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                    </div>
                    <div>Hello, How are you?????</div>
                </div>
            </BrowserRouter>
        );
    }


export default App;
