import React from 'react';
import isPreload from "../../common/Reload-1s-200px.svg"


const Preloader = () => {
    return (
            <div style={{marginLeft: '40%', marginTop: '10%'}}>
                <img  src={isPreload} alt="#"/>
            </div>
    );
};

export default Preloader;