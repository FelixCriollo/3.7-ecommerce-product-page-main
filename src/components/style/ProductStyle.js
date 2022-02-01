import styled from "styled-components";
import { styleVariables } from "./styleVariables";

export const ProductStyle = styled.section`
  width: 100%;
  height: 300px;
  
  .main-image {
    height: 100%;

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .main-image-container {
    height: 100%;
  }
`