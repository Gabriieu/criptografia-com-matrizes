import styled from "styled-components";

export const FooterStyle = styled.footer`
  //aqui vc faz a estilização
  background-color: black;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2,
    span {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
        text-align: center;
    }

    a {
      color: cyan;
    }
  }
`;
