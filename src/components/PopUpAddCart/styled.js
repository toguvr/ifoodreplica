import styled from 'styled-components'
import { SelectPicker } from "rsuite";

export const MainPopUpDiv = styled.div`
    min-height:100vh;
    width:100%;
    background: rgba(0,0,0,0.5);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position: fixed;
    top:0;
    bottom:0;
`

export const SelectPickerStyled = styled(SelectPicker)`
    width: calc(100% - 32px);
    margin:0 16px;
`

export const WhiteContainer = styled.div`
    width:calc(100% - 32px);
    margin:0 16px;
    background-color: #ffffff;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
`

export const Text = styled.span`
    height: 18px;
    font-size:16px;
    margin-top:43px;
    margin-bottom:31px;
`

export const SpanButton = styled.span`
    height: 19px;
    text-align: right;
    font-size:16px;
    margin-top:28px;
    width: calc(100% - 16px);
    color: #4f81a8;
    margin-right:16px;
    margin-bottom:21px;
    cursor: pointer;
`