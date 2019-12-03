import styled from 'styled-components';

export const Wrapper = styled.div``;
export const PrincipalDish = styled.p`
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000000;
  border-bottom: 1px solid black;
  padding-bottom: 8px;
  margin: 8px 16px 0;
`;
export const SideDish = styled.p`
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000000;
  border-bottom: 1px solid black;
  margin: 8px 16px;
  padding-bottom: 8px;
`;

export const CardDiv = styled.div`
  margin: 17px 16px 12px 16px;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.img`
  height: 120px;
  object-fit: fill;
`;

export const CardDatesContainers = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 126px;
  justify-content: space-around;
  margin-top: 12px;
`;

export const CardTitle = styled.p`
  color: #e8222e;
  font-size: 16px;
`;

export const CardDeliveryCategory = styled.p`
  color: #b8b8b8;
  font-size: 16px;
  margin: 0;
`;

export const CardDeliveryPriceRight = styled.span`
  color: #b8b8b8;
  font-size: 16px;
  min-height: 18px;
  margin: 0 0 0 18px;
`;

export const CardDeliveryTimeLeft = styled.span`
  color: #b8b8b8;
  font-size: 16px;
  min-height: 18px;
  margin: 0 18px 0 0;
`;

export const CardDeliveryAdress = styled.p`
  color: #b8b8b8;
  font-size: 16px;
  min-height: 18px;
`;

export const WrapperPrincipalDish = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-child{
    margin-bottom: 8px;
  }
`;

export const WrapperSideDish = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
