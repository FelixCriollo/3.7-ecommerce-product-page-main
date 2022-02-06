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
      cursor: pointer;
      box-shadow: 0px 10px 40px -10px rgba(255, 125, 27, .8);

      img {
        width: 14px;
        height: 14px;
        margin-right: 14px;
      }
    }
  }

  @media (min-width: 1024px) {
    margin-top: 70px;
    display: grid;
    grid-template-columns: 1.17fr 2fr;
    grid-template-rows: 56px;
    gap: 15px;

    .units {
      border-radius: 10px;

      &__add {
        margin: 0;
        &:hover,
        &:focus {
          opacity: .8;
        }
      }
    }
  }
`
export const UnitsBtn = styled.button`
  position: absolute;
  background: url(${props => props.background}) no-repeat center;
  width: 60px;
  height: 100%;
  ${props => props.position === "left" ? "left: 0;" : "right: 0;"}
  cursor: pointer;
`
