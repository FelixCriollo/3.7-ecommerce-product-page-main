import styled from "styled-components";
import { styleVariables } from "./styleVariables";

export const DescriptionStyle = styled.section`
  padding: 1.4em 1.5em;
  
  .descrip {
    &__brsnd {
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
`