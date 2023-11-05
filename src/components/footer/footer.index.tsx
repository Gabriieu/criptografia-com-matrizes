import { FooterStyle } from "./footer.style";

export const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <h2>
          Projeto desenvolvido com React + TypeScript para apresentação de
          criptografia da matéria 'Algebra Linear e Geometria Analítica'
          lecionada pelo Prof. Fernando Pizzo
        </h2>
        <h2>Alunos: José Gabriel e Gustavo Laurindo</h2>
        <span>
          <a
            href="https://github.com/Gabriieu/criptografia-com-matrizes"
            target="_blank"
          >
            Repositório do projeto
          </a>
        </span>
      </div>
    </FooterStyle>
  );
};
