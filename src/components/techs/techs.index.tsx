import { TechsStyle } from "./techs.style";
import { SiReact, SiTypescript } from "react-icons/si";
import mathJSLogo from "../../assets/mathjs_330x100.png";

export const TechsCard = () => {
  return (
    <TechsStyle>
      <h2>Principais tecnologias utilizadas</h2>
      <ul>
        <li>
          <div id="react">
            <a href="https://react.dev/" target="_blank">
              <h1>React</h1>
            </a>
            <SiReact color=" #61DBFB" />
          </div>
          <p>
            Framework JavaScript amplamente utilizado no desenvolvimento web
            devido à sua eficiência, reatividade e vasta comunidade de
            desenvolvedores. React permite a criação de componentes
            reutilizáveis, facilitando o desenvolvimento de aplicações modernas
            e de alta qualidade. Com a capacidade de atualizar o DOM de forma
            eficiente e sua integração com outras bibliotecas e frameworks,
            React é uma escolha sólida para projetos que exigem interfaces
            dinâmicas e interativas.
          </p>
        </li>
        <li>
          <div id="typescript">
            <a href="https://www.typescriptlang.org/" target="_blank">
              <h1>TypeScript</h1>
            </a>
            <SiTypescript color="#3178C6" />
          </div>
          <p>
            TypeScript é uma linguagem de programação de código aberto
            desenvolvida pela Microsoft. Ela é uma extensão do JavaScript que
            adiciona tipagem estática, proporcionando um desenvolvimento mais
            seguro e eficiente. TypeScript ajuda a detectar erros de programação
            em tempo de compilação, oferecendo recursos avançados de
            autocompletar e fornecendo uma melhor documentação do código. É
            amplamente utilizado no desenvolvimento web e é particularmente
            valioso em projetos de grande escala, onde a manutenção e
            escalabilidade são essenciais.
          </p>
        </li>
        <li>
          <div id="mathjs">
            <a href="https://mathjs.org/" target="_blank">
              <h1>Math.js</h1>
            </a>
            <img src={mathJSLogo} alt="" />
          </div>
          <p>
            Math.js é uma biblioteca JavaScript de código aberto usada para
            realizar operações matemáticas, incluindo a multiplicação de
            matrizes. Ela fornece uma ampla gama de recursos matemáticos,
            facilitando o cálculo de equações complexas, a manipulação de
            matrizes e a realização de operações matemáticas avançadas em
            aplicações web. É uma escolha popular para projetos que envolvem
            matemática computacional e cálculos numéricos.
          </p>
        </li>
        <li>
          <div id="styled">
            <a href="https://styled-components.com/" target="_blank">
              <h1>Styled-components</h1>
            </a>
            💅
          </div>
          <p>
            Styled-components é uma biblioteca JavaScript utilizada para a
            estilização de componentes em aplicações web. Ela permite a criação
            de estilos CSS de forma dinâmica e encapsulada diretamente nos
            componentes, tornando o desenvolvimento mais modular e manutenível.
            Com a sua sintaxe baseada em template literals, Styled-components
            oferece uma maneira elegante de estilizar componentes, tornando o
            código mais legível e facilitando a criação de interfaces de usuário
            estilizadas e personalizadas. Ela é amplamente utilizada em conjunto
            com bibliotecas como React para o desenvolvimento de aplicações web
            modernas e atraentes.
          </p>
        </li>
        <li>
          <span id="repository">
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
