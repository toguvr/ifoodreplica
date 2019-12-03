import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const ContainerAddressPage = styled.form `
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const TextRegister = styled.div `
    font-size: 16px;
    color: #000000;
    height: 18px; 
    margin-top: 16px;  
`
export const InputAddress = styled(TextField) `
    margin-top: 20px;
    width: calc(100% - 32px);
    height: 56px;
`

export const InputNumber = styled(TextField) `
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
`

export const InputHouse = styled(TextField)`
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
`

export const InputNeighborhood = styled(TextField)`
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
`
export const InputCity = styled(TextField)`
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
`

export const InputState = styled(TextField)`
    margin-top: 16px;
    width: calc(100% - 32px);
    height: 56px;
    margin-bottom: 16px;
`

