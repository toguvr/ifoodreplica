import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const ContainerEditAddressPage = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const InputAddress = styled(TextField) `
    margin-top: 24px;
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

