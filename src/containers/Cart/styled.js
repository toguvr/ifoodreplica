import styled from 'styled-components';
import { Typography, FormControl } from '@material-ui/core';

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DeliveryAdressContainer = styled.div`
  background-color: #eeeeee;
  width: 100%;
  height: 76px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const DeliveryAdress = styled.span`
  color: #b8b8b8;
`;

export const RestaurantAdress = styled.span`
  color: #b8b8b8;
`;

export const WaitingTime = styled.span`
  color: #b8b8b8;
`;

export const TotalText = styled.span`
  min-height: 21px;
  font-size: 18px;
  font-weight: bold;
  color: #e8222e;
`;

export const RestaurantDetailContainer = styled.div`
  width: 100%;
  height: 96px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const PriceContainer = styled.div`
  width: 100%;
  height: 76px;
  display: flex;
  flex-direction: column;
`;

export const FreightPrice = styled(Typography)`
  margin-top: 25px;
  padding-left: 70%;
`;

export const FinalPriceContainer = styled(Typography)`
  width: 100%;
  padding: 0 8%;
  display: flex;
  justify-content: space-between;
`;

export const PaymentContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 0 8%;
`;

export const ButtonDiv = styled.div`
  margin-bottom: 58px;
  width: 100%;
`;

export const HeaderDiv = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
`;
export const EmptyCart = styled.p`
  opacity: 0.89;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000000;
  margin-top: 20px;
`;

export const Error = styled.p`
  color: red;
`