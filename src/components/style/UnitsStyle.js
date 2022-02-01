import styled from "styled-components";
import { styleVariables } from "./styleVariables";

export const UnitsStyle = styled.div`

  .units {
    width: 100%;
    height: 56px;
    background: ${styleVariables["bg-input"]};
    color: ${styleVariables["text-hea"]};
    border-radius: 30px;
    display: flex;
    justify-content: center;
    
    &__value {
      font-weight: 700;
      margin: auto;
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

