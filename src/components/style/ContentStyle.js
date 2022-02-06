import styled from "styled-components";

export const ContentStyle = styled.main`
  width: min(100%, 720px);
  margin-inline: auto;

  @media (min-width: 1024px) {
    width: min(1015px, 86vw);
    height: max(calc(100vh - 109px), 680px);
    padding-bottom: min(40px, 3vh);
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center; 
  }
`
