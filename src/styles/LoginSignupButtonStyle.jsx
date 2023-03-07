import styled from "styled-components";
import { naverColorCode } from "../constants/colorCode";

const LoginSignupButtonStyle = styled.div`
  cursor: pointer;
  background-color: ${naverColorCode};
  color: #fff;
  font-weight: 700;
  text-align: center;
  align-items: center;
  border-radius: 5px;
  width: 70vw;
  height: 10vh;
  display: table-cell;
  vertical-align: middle;
`;

export default LoginSignupButtonStyle;
