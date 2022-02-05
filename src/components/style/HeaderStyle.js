import styled from "styled-components"
import { styleVariables } from "./styleVariables"

export const HeaderStyle = styled.header`
  width: min(100%, 1110px);
  margin-inline: auto;
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
    margin-left: min(6.5%, 2em);
    border-radius: 50%;
  }

  @media (min-width: 1024px) { 
    padding: 1.815em 0;
    align-items: center;
    border-bottom: 1px solid ${styleVariables["text-price"]};
    
    .header__logo {
      margin-left: 0;
      order: 0
      width: 150px;
    }
    .user__avatar {
      width: 50px;
      height: 50px;
      cursor: pointer;

      &:hover,
      &:focus {
        border: 2px solid ${styleVariables["primary"]};
      }
    }
  }
` 

export const CartBuy = styled.button`
  order: 1;
  width: 24px;
  height: 24px;
  background: url(${props => props.background}) center center no-repeat;
  margin-left: auto;

  @media (min-width: 1024px) {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
`