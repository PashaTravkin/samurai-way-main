import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Nav} from "./components/Nav";

function App() {
    return (
        <div className="app-wraper">
           <Header/>
            <Nav/>
            <

            < div className="content">
                <div className="mainImgInContent"><img
                          src="https://besthqwallpapers.com/Uploads/31-3-2021/160338/thumb2-social-networks-blue-background-social-networks-icons-blue-light-globe-global-networks.jpg"
                          alt=""/></div>
                <div className='workingArea' >
                    <div>ava+description</div>
                    <div>My post</div>
                    <div>New post</div>
                    <div>post1</div>
                    <div>post2</div>
                </div>
            </div>


        </div>
    );
}

export default App;
