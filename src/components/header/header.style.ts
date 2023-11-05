import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 8px;
  border-bottom: 2px solid black;

  img {
    height: 60px;
  }

  h2 {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 1.5rem;
    color: white;
  }
`;
