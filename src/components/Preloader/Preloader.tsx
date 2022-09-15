import React from 'react';
import isPreload from "../../common/Reload-1s-200px.svg";

type PreloaderPropsType = {
    PreloaderIMG:string
}

const Preloader = (props:PreloaderPropsType) => {
    return (
            <div style={{marginLeft: '40%', marginTop: '10%'}}>
                <img  src={props.PreloaderIMG} alt="#"/>
            </div>
    );
};

export default Preloader;