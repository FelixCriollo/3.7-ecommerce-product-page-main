import styled from "styled-components";
import { styleVariables } from "./styleVariables";

export const CartModalStyle = styled.div`
  position: absolute;
  display: ${
    props => props.mState ? "none" : "block"
  };
  width: min(calc(100% - 16px), 460px);
  background: ${styleVariables.bg};
  z-index: 1;
  right: 7px;
  top: 76px;
  border-radius: 10px;
  box-shadow: 0px 3px 25px  rgba(0, 0, 0, 0.75);
  
  .cart__title {
    color: ${styleVariables["text-hea"]};
    padding: 1.5em;
    font-size: 1rem;
    border-bottom: 1px solid ${styleVariables["text-price"]};
  }
  .cart__empty {
    color: ${styleVariables["text-hea"]};
    font-weight: 700;
    font-size: 1.05rem;
    padding-bottom: 1em;
    width: 100%;
    height: 187px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    width: 360px;
    right: -2vw;
    top: 90px;
  }
`
