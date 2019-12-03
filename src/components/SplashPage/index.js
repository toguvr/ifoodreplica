import React from "react";
import { MainSplash, ImgIconLogo } from './styled'

const Splash = () => {
    return (
        <MainSplash>
            <ImgIconLogo src={require('../../assets/logo-future.svg')} alt="logo branco" />
        </MainSplash>
    )
};

export default Splash;