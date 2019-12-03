import React from "react";
import { MainCartCardDiv, CardTitle, CardDate, CardPrice } from './styled'

export const CartCard = props => {

    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const transformDate = new Date(props.date).getDate() + " " + months[new Date(props.date).getMonth()] + " " + new Date(props.date).getFullYear()

    return (
        <MainCartCardDiv>
            <CardTitle>{props.title}</CardTitle>
            <CardDate>{transformDate}</CardDate>
            <CardPrice>SUBTOTAL R${Number(props.price).toFixed(2)}</CardPrice>
        </MainCartCardDiv>
    )
}

export default CartCard


