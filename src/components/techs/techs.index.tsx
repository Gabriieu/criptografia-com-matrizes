import { TechsStyle } from "./techs.style";

export const TechsCard = () => {
  return (
    <TechsStyle>
      <h2>Tecnologias utilizadas</h2>
      <ul>
        <li>
          <h1>React</h1>
          <p>Framework utilizado para o desenvolvimento da aplicação</p>
        </li>
        <li>
          <h1>TypeScript</h1>
          <p>Linguagem de programação utilizada</p>
        </li>
        <li>
          <h1>Math.js</h1>
          <p>Biblioteca utilizada para a multiplicação das matrizes</p>
        </li>
        <li>
          <h1>Styled-components</h1>
          <p>Biblioteca utilizada para a estilização do site</p>
        </li>
        <li>
          <span>
            <a
              href="https://github.com/Gabriieu/criptografia-com-matrizes"
              target="_blank"
            >
              Código fonte do projeto
            </a>
          </span>
        </li>
      </ul>
    </TechsStyle>
  );
};
