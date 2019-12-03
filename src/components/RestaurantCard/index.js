import React from 'react';
import {
  MainCardDiv,
  CardDiv,
  CardImage,
  CardTitle,
  CardDatesContainers,
  CardDeliveryPriceRight,
  CardDeliveryTimeLeft
} from './styled';

const RestaurantCard = props => {
  return (
    <MainCardDiv onClick={props.onClick}>
      <CardDiv>
        <CardImage src={props.logoUrl} />
        <CardTitle>{props.name}</CardTitle>
        <CardDatesContainers>
          <CardDeliveryTimeLeft>{props.deliveryTime}min</CardDeliveryTimeLeft>
          <CardDeliveryPriceRight>
            Frete R${props.shipping},00
          </CardDeliveryPriceRight>
        </CardDatesContainers>
      </CardDiv>
    </MainCardDiv>
  );
};

export default RestaurantCard;
