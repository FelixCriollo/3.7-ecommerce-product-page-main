import styled from "styled-components";
import { styleVariables } from "./styleVariables";

export const PriceStyle = styled.section`
  margin-top: 1.5em;
  
  .price {
    margin-bottom: 1.5em;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    
    &__amount {
      font-size: 1.9rem;
      font-weight: 700;
      color: ${styleVariables["text-hea"]};
      
      &::before {
        content: "$${props => props.amount / (props.discount / 100)}.00";
        display: ${props => props.discount ? "block" : "none"};
        position: absolute;
        right: 0; 
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.1rem;
        color: ${styleVariables["text-price"]};
        /* text-decoration: line-through; */
      }

      &::after {
        content: "";
        position: absolute;
        right: 0; 
        top: 50%;
        transform: translateY(10%);
        width: 68px;
        height: 4px;
        background: ${styleVariables["text-price"]};
      }
    }

    &__discount {
      display: ${props => props.discount ? "block" : "none"};
      background: ${styleVariables["primary-bg"]};
      color: ${styleVariables["primary"]};
      padding: .5em;
      margin-left: 15px;
      border-radius: 10px;
      font-weight: 700;
    }
  }

  @media (min-width: 1024px) {
    .price {
      &__amount {        
        &::before {
          left: 0; 
          top: 50px;
          transform: unset;
        }
        &::after {
          left: 0;
          top: 60px;
          transform: unset;
        }
      }
    }
  }
`
