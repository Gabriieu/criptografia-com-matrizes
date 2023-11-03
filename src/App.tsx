import { useEffect, useContext } from "react";
import { BottomSection, MainStyled } from "./App";
import { MainContext } from "./provider/main.provider";
import * as math from "mathjs";
import { CaracterCard } from "./components/caracter-card/caracter-card.index";

function App() {
  const {
    generateKey,
    key,
    setKey,
    wordMatrix,
    cryptedWord,
    cryptResult,
    transformMatrix,
    wordToMatrix,
    finalWord,
    list,
  } = useContext(MainContext);

  const handleInput = (text: string) => {
    if (text.length >= 4) {
      cryptResult(transformMatrix(math.multiply(wordToMatrix(text), key)));
    }
  };

  useEffect(() => {
    setKey(generateKey());
  }, []);

  return (
    <>
      {key.length > 0 && (
        <>
          <header></header>
          <MainStyled>
            <section>
              <div id="key-inputs">
                <h2>MATRIZ CHAVE</h2>
                <div>
                  <input
                    name="input"
                    disabled={true}
                    type="number"
                    value={key[0][0]}
                  />
                  <input
                    name="input"
                    disabled={true}
                    type="number"
                    value={key[0][1]}
                  />
                </div>
                <div>
                  <input
                    name="input"
                    disabled={true}
                    type="number"
                    value={key[1][0]}
                  />
                  <input
                    name="input"
                    disabled={true}
                    type="number"
                    value={key[1][1]}
                  />
                </div>
              </div>
              <div className="input-word">
                <h2>CRIPTOGRAFAR</h2>
                <input
                  name="input"
                  type="text"
                  onChange={(event) => handleInput(event.target.value)}
                  placeholder="Digite a palavra..."
                />
              </div>
              <div id="matrix-result">
                <h2>MATRIZ RESULTANTE</h2>
                <div>
                  {wordMatrix.length > 0 &&
                    wordMatrix.map((list) =>
                      list.map((number) => (
                        <input
                          name="input"
                          type="number"
                          value={number}
                          disabled={true}
                          key={math.random()}
                        />
                      ))
                    )}
                </div>
              </div>
              <div className="input-word">
                <h2>RESULTADO</h2>
                {cryptedWord.length > 0 ? (
                  <textarea id="result" readOnly={true} value={finalWord}></textarea>
                ) : (
                  <input
                    name="input"
                    type="text"
                    disabled={true}
                    value={"Aguardando..."}
                  />
                )}
              </div>
            </section>
            <BottomSection>
              <h2>TABELA DE REFERÊNCIA</h2>
              <ul>
                {list.map((obj) => (
                  <CaracterCard obj={obj} key={math.random()} />
                ))}
              </ul>
            </BottomSection>
          </MainStyled>
        </>
      )}
    </>
  );
}

export default App;
