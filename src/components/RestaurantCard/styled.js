import styled from 'styled-components'


export const MainCardDiv = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    &:last-child {
        margin-bottom: 58px;
    }
    
`

export const CardDiv = styled.div`
    width:328px;
    margin: 8px 16px 0px 16px;
    border-radius:8px;
    border: solid 1px #b8b8b8;
`

export const CardDatesContainers = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    margin-top:5px;
`

export const CardImage = styled.img`
    width:100%;
    height: 120px;
    object-fit: fill;
    margin-bottom:12px;
    border-radius:8px 8px 0 0;
`

export const CardTitle = styled.span`
    color: #e8222e;
    font-size: 16px;
    height:18px;
    width: 100%;
    margin: 0 16px;
`

export const CardDeliveryPriceRight = styled.span`
    color: #b8b8b8;
    font-size: 16px;
    height:18px;
    margin:0 16px 16px 8px;
`

export const CardDeliveryTimeLeft = styled.span`
    color: #b8b8b8;
    font-size: 16px;
    height:18px;
    margin:0 8px 16px 16px;
`


