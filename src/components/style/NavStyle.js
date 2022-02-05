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

  @media (min-width: 1024px) {
    height: auto;
    order: 1;

    .nav-container {
      position: relative;
      display: block;
      height: auto;
      width: 398px;
      z-index: 10;
      padding: 0;
      margin-left: 3.6em;
      transform: unset;

      &:before {
        display: none;
      }
    }
  }
` 

export const NavButton = styled.button`
  width: 24px;
  height: 24px;
  background: url(${props => props.background}) center left no-repeat;
  z-index: 10;

  @media (min-width: 1024px) {
    display: none;
  }
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

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    padding: 0;
    
    a {
      position: relative;
      font-size: 1rem;
      color: ${styleVariables["text-para"]};
      padding: 0;
      cursor: pointer;

      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        background: ${styleVariables["primary"]};
        border-radius: 50px;
        top: 61px;
        display: none;
      }

      &:hover,
      &:focus {
        color: ${styleVariables["text-hea"]};

        &:before {
          display: block;
        }
      }
    }
  }
`