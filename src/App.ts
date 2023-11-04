import styled from "styled-components";

export const MainStyled = styled.main`
  padding: 1rem;

  button{
      background-color: rgba(1,1,1,.1);
      padding: 8px;
      border-radius: 8px;
      margin: .5rem;
      color: red;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      &:hover{
        transform: scale(1.1);
      }
    }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .text-area{
        width: 428px;
        max-width: 90vw;
        border: 1px solid black;
        resize: none;
        height:300px;
      }

      .disabled-input{
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
`;

export const MiddleSection = styled.section`
  margin-top: 3rem;
  border-top: 2px solid black;
`
export const BottomSection = styled.section`

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
