import styled from "styled-components";

export const TechsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 1.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  li {
    background-color: rgba(1, 1, 1, 0.9);
    color: white;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a{
        color: yellow;
    }
  }
`;
