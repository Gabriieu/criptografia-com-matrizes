import styled from "styled-components";

export const CardStyle = styled.li`
  background-color: rgba(1, 1, 1, 0.9);
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin-top: 1rem;

  .role {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    text-decoration: underline;
  }

  h6,
  p,
  a {
    margin: 1rem 0 1rem 0;
    text-align: justify;
  }

  .user-name {
    font-size: 1.5rem;
  }
  #tech-redirect {
    &:hover {
      transform: scale(1.5);
    }
  }
  .tech-redirect > {
    &:hover {
      transform: scale(1.5);
    }
  }
  
  > div > div {
    a {
      margin: 0 1rem 0 0;
    }
  }
`;
