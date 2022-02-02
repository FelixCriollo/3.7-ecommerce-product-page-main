import styled from "styled-components";
import { styleVariables } from "./styleVariables";

export const ProductStyle = styled.section`
  width: 100%;
  height: 300px;
  
  .main-image {
    position: relative;
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

export const MoveBtn = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: url(${props => props.background}) no-repeat center, ${styleVariables["bg"]};
  top: 50%;
  transform: translateY(-50%);
  ${props => props.position !== "left" ? "left: 16px;" : "right: 16px;"}
`