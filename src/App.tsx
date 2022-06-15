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


export type MyPostPropsType = {
    id: number,
    message: string,
    likesCount: number
}

export type dialogsDataType = {
    id: number,
    name: string
}

export type messagesDataType = {
    id: number,
    message: string
}

export type AppPropsType = {
    postsData: Array<MyPostPropsType>
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"mainPages"}>
                    <Route path={'/profile'} render={() => <Profile postsData={props.postsData}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogsData={props.dialogsData}
                                                                    messagesData={props.messagesData}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
