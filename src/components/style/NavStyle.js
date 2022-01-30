import styled from "styled-components"
import { styleVariables } from "./styleVariables"

export const NavStyle = styled.nav`
  height: 24px;
` 

export const NavButton = styled.button`
  width: 24px;
  height: 24px;
  background: url(${props => props.background}) center left no-repeat, red;
`
export const NavList = styled.ul`
  display: none;
`