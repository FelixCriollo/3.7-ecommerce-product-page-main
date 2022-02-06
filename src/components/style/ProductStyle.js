import styled from "styled-components";
import { styleVariables } from "./styleVariables";

export const ProductStyle = styled.section`
  width: 100%;
  height: 300px;
  
  .main-image {
    position: relative;
    width: 100%;
    height: 100%;
    
    &__img {
      width: 375px;
      height: 300px;
      object-fit: cover;
      margin: 0 auto;
    }
  }
  
  .main-image-container {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    height: 100%;
    overflow: hidden;
    scroll-behavior: smooth;
    background: ${styleVariables["bg-input"]};
  }

  .thumbnail {
    display: none;
  }

  @media (min-width: 1024px) {
    width: auto;
    height: auto;
    display: grid;
    grid-template-rows: 445px 88px;
    grid-template-columns: 445px;
    gap: 32px;

    .main-image {
      width: 445px;
      height: 445px;
      
      &__img {
        width: 100%;
        height: 100%;
        border-radius: 24px;
      }
    }
    .main-image-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 1fr);
      overflow: hidden;
    }

    .thumbnail {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 31px;

      .thumbnail__img {
        position: relative;
        border-radius: 12px;
        cursor: pointer; 
        
        &:hover,
        &:focus {
          outline: 2px solid ${styleVariables["primary"]};
          opacity: 0.7;  
        }
      }
    }
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
  ${props => props.position === "left" ? "left: 16px;" : "right: 16px;"}

  @media (min-width: 1024px) {
    display: none;
  }
`