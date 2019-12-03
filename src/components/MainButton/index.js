import React from "react";
import { MainButton, ButtonDiv } from './styled'

const MainButtonComponent = (props) => {
    return (
        <ButtonDiv>
            <MainButton onClick={props.onButtonClick ? ()=>props.onButtonClick() : null} >{props.title ? props.title : 'veja as props para este nome'}</MainButton>
        </ButtonDiv>
    )
}

export default MainButtonComponent