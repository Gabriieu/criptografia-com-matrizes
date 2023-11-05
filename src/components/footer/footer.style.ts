import styled from "styled-components";
import gif from "../../assets/gif.gif";

export const FooterStyle = styled.footer`
  background-image: url(${gif});
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
    background-color: rgba(1,1,1,.8);
    padding: 1rem;
    border-radius: 1rem;
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
