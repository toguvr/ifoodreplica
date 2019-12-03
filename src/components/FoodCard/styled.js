import styled from "styled-components"
import CardMedia from '@material-ui/core/CardMedia';


export const StyledCard = styled.div`
    width: calc(100% - 32px);
    min-height: 112px;
    display: flex;
    margin: 8px 16px 0;
    border: solid 1px #b8b8b8;
    border-radius:8px;
`

export const FlexDiv = styled.div`
    justify-content:space-between;
    display:flex;
`

export const StyledCardMedia = styled(CardMedia)`
    background-color: black;
    width: 30%;
    border-radius: 8px 0 0 8px;
`

export const CardContent = styled.div`
    width: 70%;
    display: flex;
    flex-direction:column;
    padding-left: 16px;
`

export const TypographyTitle = styled.span`
    margin-top: 18px;
    min-height:18px;
    font-size: 16px;
    color: #e8222e;
    white-space: nowrap;
    overflow: hidden;
    width: 167px;
    text-overflow: ellipsis;
`

export const RequestQuantityWrapper = styled.div`
    border: solid 1px #e8222e;
    display:flex;
    justify-content:center;
    align-items:center;
    width: 33px;
    height: 33px;
    border-radius: 0px 5px 0px 5px;
`

export const TypographyDescription = styled.span`
    margin: 8px 16px 0 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    height:32px;
    font-size: 12px;
    color: #b8b8b8;
`

export const TypographyValue = styled.span`
    margin-top: 4px;
    font-size: 16px;
    min-height: 19px;
    color: #000000;
`

export const TypographyButtonText = styled.span`
    font-size: 12px;
    min-height: 14px;
    color: ${props => props.borderColor};
`

export const AddRequestButton = styled.div`
    margin-top:7px;
    width:90px;
    height:31px;
    border-style:solid;
    border-width:thin;
    border-color: ${props => props.borderColor};
    border-radius: 8px 0px 8px 0px ;
    display:flex;
    justify-content:center;
    align-items:center;
`


