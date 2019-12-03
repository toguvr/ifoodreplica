import React from "react";

import {
	Wrapper,
	ContainerTeste,
	Rectangle,
	StatusOrder,
	RestaurantName,
	SubTotal,
	StyledClock,
	TextWrapper
} from "./styled";

const OrderInProgress = (props) => {
	return (
		<Wrapper>
			<Rectangle>
				<StyledClock />
				<TextWrapper>
					<StatusOrder>Pedido em andamento</StatusOrder>
					<RestaurantName>{props.order.restaurantName}</RestaurantName>
					<SubTotal>SUBTOTAL R${Number(props.order.totalPrice).toFixed(2)}</SubTotal>
				</TextWrapper>
			</Rectangle>
		</Wrapper>
	);
};

export default OrderInProgress;
