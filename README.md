# CryptoMatrix - Criptografia de Strings com Matrizes em React

Este projeto é uma implementação prática da criptografia de strings com o uso de matrizes, desenvolvida como parte de um trabalho acadêmico para a disciplina de Álgebra Linear e Geometria Analítica. A aplicação utiliza a linguagem de programação TypeScript e demonstra como os conceitos da álgebra linear podem ser aplicados na segurança da informação.

## Funcionalidades

- Criptografe mensagens com matrizes.
- Interface de usuário amigável.
- Demonstração interativa para fins didáticos.

## Instalação

Certifique-se de ter [Node.js](https://nodejs.org/) instalado em seu sistema. Para instalar e executar o projeto, siga estas etapas:

1. Clone este repositório

2. Navegue para a pasta do projeto:
   `cd crypto-matrix`

3. Instale as dependências:
   `npm install`

4. Execute a aplicação:
   `npm run dev`

5. Abra um navegador da web e acesse http://localhost:5173 para usar o aplicativo.

## Didático

A criptografia com matrizes funciona da seguinte forma:

1.  Transforma-se a palavra/frase em um matriz de números, cada letra é convertida para seu número correspondente na tabela.
2.  Em seguida multiplica-se a matriz resultante pela matriz chave.
    **Obs 1: na multiplicação de matrizes a ordem das matrizes interfere no resultado, portanto deve ser a Matriz x Chave, nesta ordem.**
    **Obs 2: só é possível multiplicar matrizes que a quantidade de colunas seja igual a quantidade de linhas da outra matriz.**
3.  Após a multiplicação é gerada uma nova matriz, caso haja valores superiores à quantidade de caracteres da tabela, deve-se subtrair a quantidade total de caracteres deste resultado até que o mesmo esteja entre 0 a a quantidade de caracteres.
    **Exemplo: `quantidade de caracteres = 52` matriz resultante = [[126, 44], [1, 7]] 126 é superior a 52, portanto deve-se subtrair `126 - 52 = 74` (ainda é superior a 52, então repete-se a operação), `74 - 52 = 22` (agora sim 👍🏻)**
    3.1 Após esse ajuste a matriz ficou assim : [[22, 44],[1,7]], agora substituímos este números pelas letras correspondentes da tabela, ou seja, [[V,r],[A,G]] = `VrAG`
