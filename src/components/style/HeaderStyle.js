import styled from "styled-components"
import { styleVariables } from "./styleVariables"

export const HeaderStyle = styled.header`
  padding: 1.19em 1.5em 1.563em 1.5em;
  display: flex;
  justify-content: space-between;
` 
export const HeaderLeftStyle = styled.div`
  height: 24px;
  display: flex;
`
export const HeaderRightStyle = styled.div`
  height: 24px;
`


export const UserAvatar = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  border-radius: 50%;
`
export const CartBuy = styled.button`
  width: 24px;
  height: 24px;
  background: url(${props => props.background}) center center no-repeat, red;
`
export const HeaderLogo = styled.img`
  order: 1;
  height: 24px;
  width: 136px;
  margin-left: 10px;
`
