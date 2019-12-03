import styled from "styled-components";
import { ReactComponent as ArrowBack } from "../../assets/arrow-back.svg";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


export const Container = styled.div`
  height: 44px;
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  position:sticky;
  top:0;
  right:0;
  left:0;
  background: white;
`;

export const StyledArrow = styled(ArrowBack)`
	left: 0;
	margin-left: 16px;
  position: absolute;
`;

export const StyledExitToAppIcon = styled(ExitToAppIcon)`
	right: 0;
	margin-right: 16px;
  position: fixed;
`;

export const TitleWrapper = styled.div`
  align-self: center;
  width: 175px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Title = styled.p`
	font-size: 16px;
	letter-spacing: -0.39px;
  color: #000000;
`;
