import styled from "styled-components";

export const TechsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 1.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  li {
    background-color: rgba(1, 1, 1, 0.9);
    color: white;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    #react {
      h1 {
        background-color: #61dbfb;
        color: white;
        padding: 2px;
      }
    }

    #typescript {
      h1 {
        background-color: #3178c6;
        color: white;
        padding: 2px;
      }
    }

    #mathjs {
      h1 {
        background-color: rgb(220, 57, 18);
        color: white;
        padding: 2px;
      }
      img {
        height: 1rem;
      }
    }

    #styled {
      h1 {
        background-color: rgb(238, 63, 134);
        color: white;
        padding: 2px;
      }
    }

    #repository {
      a {
        color: red;
      }
    }
    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      background-color: white;
      width: max-content;
      border-radius: 4px;
      overflow: hidden;

      svg , img{
        padding-right: 4px;
      }
      &:hover{
        cursor: pointer;
        transform: scale(1.1);
      }
    }
    p{
        text-align: justify;
      }
  }
`;
