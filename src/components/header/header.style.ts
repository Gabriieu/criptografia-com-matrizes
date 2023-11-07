import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 8px;
  border-bottom: 2px solid black;
  position: relative;

  img {
    height: 60px;
  }


  h2 {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 1.5rem;
    color: white;
  }

  #web-site-title {
    display: none;
  }

  @media (min-width: 1024px) {
    #web-site-title {
      display: block;
    }
    #hamb-menu {
      display: none;
    }
  }
`;

export const MobileNavBar = styled.nav`
  position: absolute;
  width: 100vw;
  background-color: rgba(1, 1, 1, 0.9);
  color: white;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
  }
  li {
    color: white;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
    padding: 0.5rem;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const DesktopNavBar = styled.nav`
  display: none;

  ul {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  li {
    position: relative;
    color: white;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      top: 100%;
      width: 100%;

      height: 1px;  
      background-color: #fff;
      transition: 0.5s;


    }
  }

  @media (min-width: 1024px) {
    display: block;
  }

`;
