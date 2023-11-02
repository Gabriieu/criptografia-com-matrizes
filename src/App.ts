import styled from "styled-components";

export const MainStyled = styled.main`
  width: 100vw;
  height: 100vh;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      padding: 0.5rem;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }

    #key-inputs {
      border: 1px solid gray;
      padding: 0.5rem;
      margin: 1rem;
      max-width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;

      div {
        justify-content: center;
        display: flex;
        flex-direction: row;
        gap: 1rem;

        input {
          color: gray;
          text-align: center;
          border: 1px solid black;
          border-radius: 8px;
          width: 20%;
          margin-bottom: 0.5rem;
          &:hover {
            cursor: not-allowed;
          }
        }
      }
    }

    #input-word {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      input {
        height: 2rem;
      }
    }

    input {
      text-align: center;
      border: 1px solid black;
      border-radius: 8px;
      margin-bottom: 0.5rem;
    }
  }
`;

export const BottomSection = styled.section`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;

      &:hover{
        cursor: pointer;
      }
    }
  }
`;
