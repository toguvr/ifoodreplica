import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

export const WrapperFixedComponents = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
`
export const BaseInput = styled(InputBase) `
    margin-left: 17px;
`
export const IconSearch = styled(SearchIcon) `
    margin-left: 17px;
`
export const ContainerSearch = styled.div `
    width: calc(100% - 32px);
    height: 56px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    display: flex;
    margin: 8px 16px;
    align-items: center;
` 