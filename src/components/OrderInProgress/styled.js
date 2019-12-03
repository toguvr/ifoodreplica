import styled from "styled-components";
import { ReactComponent as Clock } from '../../assets/clock.svg'

export const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,800&display=swap');
  font-family: "Montserrat", sans-serif;
  position: fixed;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  & p:not(:last-child) {
		margin-bottom: 8px;
  }
`;

export const Rectangle = styled.div`
  width: 100vw;
  height: 118px;
  background-color: #e8222e;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

export const ContainerTeste = styled.div`
  width: 100vw;
  height: 49px;
	border-top: 1px solid black;
	padding: 10px;
`;

export const StatusOrder = styled.p`
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #ffffff;
`;

export const RestaurantName = styled.p`
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000000
`;

export const SubTotal = styled.p`
	font-size: 16px;
	font-weight: 700;
	letter-spacing: -0.39px;
  color: #000000
`
export const StyledClock = styled(Clock)`
	color: #fff;
	margin: 24px;
`