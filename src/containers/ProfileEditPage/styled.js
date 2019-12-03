import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const ContainerProfilePage = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const InputName = styled(TextField) `
    margin-top: 24px;
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