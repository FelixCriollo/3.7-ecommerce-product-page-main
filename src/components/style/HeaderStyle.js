import styled from "styled-components"
import { styleVariables } from "./styleVariables"

export const HeaderStyle = styled.header`
  padding: 1.19em 1.5em 1.563em 1.5em;
  display: flex;
  justify-content: start;

  .header__logo {
    order: 1;
    height: 24px;
    width: 136px;
    margin-left: 10px;
  }

  .user__avatar {
    order: 1;
    width: 24px;
    height: 24px;
    margin-left: 6.5%;
    border-radius: 50%;
  }
` 

export const CartBuy = styled.button`
  order: 1;
  width: 24px;
  height: 24px;
  background: url(${props => props.background}) center center no-repeat;
  margin-left: auto;
`