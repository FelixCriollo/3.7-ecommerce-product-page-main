import styled from "styled-components";
import { styleVariables } from "./styleVariables";

export const DescriptionStyle = styled.section`
  padding: 1.4em 1.5em;
  
  .descrip {
    &__brand {
      color: ${styleVariables["primary"]};
      text-transform: uppercase;
      font-size: .9rem;
    }
    
    &__name {
      font-size: 1.75rem;
      margin: .3em 0 .5em 0;
    }
    
    &__body {
      color: ${styleVariables["text-para"]};
      font-size: .95rem;
      line-height: 1.6;
    }
  }

  @media (min-width: 1024px) {
    padding: 0;
    width: 445px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;

    .descrip {
      &__brand {
        font-size: .98rem;
      }
      
      &__name {
        font-size: 2.75rem;
        line-height: 1.1;
        margin: .45em 0 .7em 0;
      }
      
      &__body {
        font-size: 1.01rem;
      }
    }
  }
` 