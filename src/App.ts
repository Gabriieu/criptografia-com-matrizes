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

    .input-word {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      input {
        height: 2rem;
      }
    }

    #matrix-result {
      border: 1px solid gray;
      padding: 0.5rem;
      margin: 1rem;
      max-width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 428px;

      div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        gap: 4px;
        max-height: 30vh;
        overflow-y: scroll;
        input {
          width: 40%;

          &:hover {
            cursor: not-allowed;
          }
        }
      }
    }

    input {
      text-align: center;
      border: 1px solid black;
      border-radius: 8px;
      margin-bottom: 0.5rem;
    }

    textarea {
    }
  }
`;

export const BottomSection = styled.section`
  width: 100vw;

  >h2{
    &:hover{
      cursor: pointer;
    }
  }
  ul {
    width: 100%;
    max-width: 428px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    border: 1px solid black;
    padding: 8px;

  }
`;
