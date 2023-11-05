import styled from "styled-components";
import background from "../../assets/green-matrix-background-2560x1600-wallpaper.jpg";

export const AboutStyle = styled.main`
  display: flex;
  flex-direction: row;
  min-height: 100vh;

  #sections {
    section {
      margin-top: 3rem;
      padding: 8px;
    }

    #devs-name {
      font-size: 1.5rem;
    }
    #about-title {
      #welcome {
        text-align: center;
        h6 {
          font-size: 3rem;
        }
        p {
          font-size: 1.5rem;
          margin-top: 1rem;
        }
      }
    }
  }

  #background {
    display: none;

    @media (min-width: 1024px) {
      margin-left: 2rem;
      display: block;
      background-image: url(${background});
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
      min-width: 35vw;
    }
  }
`;
