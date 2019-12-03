import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const ImgLogo = styled.img `
    width: 104px;
    height: 58px;
    margin-top: 24px;
`

export const ContainerSignUpPage = styled.form `
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const TextRegister = styled.div `
    font-size: 16px;
    color: #000000;
    height: 18px; 
    margin-top: 28px;  
`
export const InputName = styled(TextField) `
    margin-top: 20px;
    width: calc(100% - 32px);
    height: 56px;
`

export const InputEmail = styled(TextField) `
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
`

export const InputCPF = styled(TextField)`
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
`

export const InputPassword = styled(TextField)`
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
`

export const InputPasswordConfirm = styled(TextField)`
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
    margin-bottom: 16px;
`
