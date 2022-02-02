import styled from "styled-components";
import { styleVariables } from "./styleVariables";

export const UnitsStyle = styled.form`

  .units {
    position: relative;
    width: 100%;
    height: 56px;
    background: ${styleVariables["bg-input"]};
    color: ${styleVariables["text-hea"]};
    border-radius: 30px;
    display: flex;
    justify-content: center;
    
    &__input {
      text-align: center;
      border: none;
      outline: none;
      background: transparent;
      border-radius: 30px;
      width: 100%;
      font-weight: 700;
      font-size: 1rem;
    }
    
    &__add {
      width: 100%;
      background: ${styleVariables["primary"]};

      margin-top: 1em;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${styleVariables["bg"]};
      font-weight: 700;
      border-radius: 10px;
      padding: 1.1em 0;

      img {
        width: 14px;
        height: 14px;
        margin-right: 14px;
      }
    }
  }
`
export const UnitsBtn = styled.button`
  position: absolute;
  background: url(${props => props.background}) no-repeat center;
  width: 60px;
  height: 100%;
  ${props => props.position !== "left" ? "left: 0;" : "right: 0;"}

`
