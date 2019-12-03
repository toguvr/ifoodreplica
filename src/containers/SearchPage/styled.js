import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

export const BaseInput = styled(InputBase) `
    margin-left: 17px;
`
export const IconSearch = styled(SearchIcon) `
    margin-left: 17px;
`
export const ContainerSearchPage = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 8px;
`

export const ContainerSearch = styled.div `
    width: calc(100% - 32px);
    height: 56px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    display: flex;
    align-items: center;
`
export const TextSearchPage = styled.div `
    margin-top: 20px;
    color: #000000;
    font-size: 16px;  
`