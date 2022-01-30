import styled from "styled-components"
import { styleVariables } from "./styleVariables"

export const HeaderStyle = styled.header`
  padding: 1.19em 1.5em 1.563em 1.5em;
  display: flex;
  justify-content: start;
` 

export const UserAvatar = styled.img`
  order: 1;
  width: 24px;
  height: 24px;
  margin-left: 22px;
  border-radius: 50%;
`
export const CartBuy = styled.button`
  order: 1;
  width: 24px;
  height: 24px;
  background: url(${props => props.background}) center center no-repeat, red;
  margin-left: auto;
`
export const HeaderLogo = styled.img`
  order: 1;
  height: 24px;
  width: 136px;
  margin-left: 10px;
`
