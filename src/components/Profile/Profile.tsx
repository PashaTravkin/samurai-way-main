import React from "react";
import "./Profile.css"
export let Profile = () => {
    return (
        < div className="content">
            <div className="mainImgInContent"><img
                src="https://besthqwallpapers.com/Uploads/31-3-2021/160338/thumb2-social-networks-blue-background-social-networks-icons-blue-light-globe-global-networks.jpg"
                alt=""/></div>
            <div className='workingArea'>
                <div className="aboutMe">
                    <div className="myPhoto"><img src="src/components/Profile/Profile" alt=""/></div>
                    <div className="discription">Diskription</div>
                </div>
                <div>
                    <div>My post</div>
                    <div>New post</div>
                    <div>post1</div>
                    <div>post2</div>
                </div>
            </div>
        </div>
    )
}
