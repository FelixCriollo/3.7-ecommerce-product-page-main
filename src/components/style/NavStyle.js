import styled from "styled-components"
import { styleVariables } from "./styleVariables"

export const NavStyle = styled.nav`
  height: 24px;

  .nav-container {
    position: fixed;
    display: block;
    background: ${styleVariables["bg"]};
    left: 0;
    top: 0;
    height: 100vh;
    width: 66.8vw;
    z-index: 10;
    padding: 1.35em 1.6em;
    transform: translateX(-100%);
    transition: all 0.3s ease-in-out;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 66.8vw;
      width: 100vw;
      height: 100vh;
      background: ${styleVariables["ligthbox-bg"]};
      z-index: -10;
      display: none;
      opacity: 0;
      transition: all 1s ease-in-out;
    }
  }
  
  .nav-show {
    transform: translateX(0%);
    transition: transform 0.3s ease-in-out;

    &::before {
      display: block;
      opacity: 1;
      transition: all 1s ease-in-out;
    }
  }
` 

export const NavButton = styled.button`
  width: 24px;
  height: 24px;
  background: url(${props => props.background}) center left no-repeat;
  z-index: 10;
`
export const NavList = styled.ul`
  display: block;
  padding-top: 2em;
  z-index: 10;
  
  li, a {
    display: block;
  }

  a {
    font-weight: 700;
    font-size: 1.1rem;
    padding: .7em 0;
  }
`