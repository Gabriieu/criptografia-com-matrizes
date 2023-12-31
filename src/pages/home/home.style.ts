import styled from "styled-components";

export const MainStyled = styled.main`
  padding: 1rem;
  min-height: 100vh;
  button {
    background-color: rgba(1, 1, 1, 0.1);
    padding: 8px;
    border-radius: 8px;
    margin: 0.5rem;
    color: red;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    &:hover {
      transform: scale(1.1);
    }
  }

  .show-hide {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    .container-inputs {
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
    .text-area {
      width: 428px;
      max-width: 90vw;
      border: 1px solid black;
      resize: none;
      height: 300px;
    }

    .disabled-input {
      &:hover {
        cursor: not-allowed;
      }
    }
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
      border-radius: 20px;



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
        }
      }
    }

    .input-word {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      input {
        width: 428px;
        max-width: 90vw;
        padding: 8px;
      }
    }

    #matrix-result {
      height: 150px;
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
  }

  .title {
    font-size: 24px;
  }

  svg {
    &:hover {
      cursor: pointer;
      @keyframes girar360 {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      animation: girar360 0.2s linear;
    }
  }
`;

export const MiddleSection = styled.section`
  margin-top: 3rem;
  border-top: 2px solid black;
`;
export const BottomSection = styled.section`
  > h2 {
    &:hover {
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
