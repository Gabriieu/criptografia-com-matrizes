import { UserCard } from "../../components/card/card.index";
import { TechsCard } from "../../components/techs/techs.index";
import { AboutStyle } from "./about.style";

export const AboutPage = () => {
  return (
    <AboutStyle>
      <div id="sections">
        <section id="about-title">
          <div id="welcome">
            <h6>Seja bem vindo ao projeto de criptografia</h6>
            <p>
              Este projeto foi desenvolvido com o propósito de demonstrar na
              prática a utilização de matrizes para a criptografia de dados.
            </p>
          </div>
        </section>
        <section id="devs">
          <div>
            <h1 id="devs-name">Criadores: </h1>
            <ul>
              <UserCard
                name="José Gabriel"
                role="Programador"
                linkedin="https://www.linkedin.com/in/jos%C3%A9gabrielsouza/"
                github="https://github.com/Gabriieu"
                description="Me chamo José Gabriel, sou estudante de Engenharia de Computação na FESA (Faculdade Engenheiro Salvador Arena), sou formado em Desenvolvimento Web Full Stack, com conhecimentos técnicos em HTML, CSS, JavaScript, TypeScript, React, Express, Python, Django, PostgreSQL, além de outros conhecimentos complementares que me permitem atuar em diversas etapas do desenvolvimento web. Além disso, tenho paixão pelo mundo da tecnologia e estou constantemente atualizando meus conhecimentos para acompanhar as últimas tendências e avanços na área de Tecnologia"
                portfolio="https://jose-gabriel-portifolio.vercel.app/"
              />
              <UserCard
                name="Gustavo Laurindo"
                role="UI/UX Designer"
                linkedin="https://www.linkedin.com/in/gustavolaurindoss/"
                github="https://github.com/lawrindovsk"
                description="Me chamo Gustavo Laurindo dos Santos, tenho 18 anos, sou formado em Técnico em Informática, atualmente estou cursando Engenharia de Computação,
            na FESA (Faculdade Engenheiro Salvador Arena). Tenho preferência em Front-End, tendo conhecimentos em HTML, CSS, JavaScript, Python, PHP, CSharp, um pouco de TypeScript + React + Node, Frameworks como Bootstrap,  e afins"
              />
            </ul>
          </div>
        </section>
        <section id="techs">
          <TechsCard />
        </section>
      </div>
      <div id="background"></div>
    </AboutStyle>
  );
};
