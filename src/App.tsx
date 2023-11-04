import { useEffect, useContext, useState } from "react";
import { BottomSection, MainStyled, MiddleSection } from "./App";
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
    matrixToWord,
    decryptedWord,
  } = useContext(MainContext);
  const [decryptKey, setDecryptKey] = useState<number[][]>([[], []]);

  const handleInput = (text: string) => {
    if (text.length >= 4) {
      cryptResult(transformMatrix(math.multiply(wordToMatrix(text), key)));
    }
  };

  const handleDecrypt = (text: string) => {
    if (decryptKey[0].length == 2 && decryptKey[1].length == 2) {
      matrixToWord(text, decryptKey);
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
                    className="disabled-input"
                    disabled={true}
                    type="number"
                    value={key[0][0]}
                  />
                  <input
                    name="input"
                    className="disabled-input"
                    disabled={true}
                    type="number"
                    value={key[0][1]}
                  />
                </div>
                <div>
                  <input
                    name="input"
                    className="disabled-input"
                    disabled={true}
                    type="number"
                    value={key[1][0]}
                  />
                  <input
                    name="input"
                    className="disabled-input"
                    disabled={true}
                    type="number"
                    value={key[1][1]}
                  />
                </div>
              </div>
              <div className="input-word">
                <h2>CRIPTOGRAFAR</h2>
                <textarea
                  className="text-area"
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
                  <textarea
                    className="text-area"
                    readOnly={true}
                    value={finalWord}
                  ></textarea>
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
            <MiddleSection>
              <h2>DESCRIPTOGRAFAR</h2>
              <div id="key-inputs">
                <h2
                  onClick={() =>
                    console.log(
                      matrixToWord("¬VKob(?Â*cDÃóW4#![{!ébÔV'm", [
                        [41, 64],
                        [57, 89],
                      ])
                    )
                  }
                >
                  MATRIZ CHAVE
                </h2>
                <div>
                  <input
                    name="input"
                    type="number"
                    onChange={(event) =>
                      setDecryptKey([
                        [Number(event.target.value), decryptKey[0][1]],
                        [decryptKey[1][0], decryptKey[1][1]],
                      ])
                    }
                  />
                  <input
                    name="input"
                    type="number"
                    onChange={(event) =>
                      setDecryptKey([
                        [decryptKey[0][0], Number(event.target.value)],
                        [decryptKey[1][0], decryptKey[1][1]],
                      ])
                    }
                  />
                </div>
                <div>
                  <input
                    name="input"
                    type="number"
                    onChange={(event) =>
                      setDecryptKey([
                        [decryptKey[0][0], decryptKey[0][1]],
                        [Number(event.target.value), decryptKey[1][1]],
                      ])
                    }
                  />
                  <input
                    name="input"
                    type="number"
                    onChange={(event) =>
                      setDecryptKey([
                        [decryptKey[0][0], decryptKey[0][1]],
                        [decryptKey[1][0], Number(event.target.value)],
                      ])
                    }
                  />
                </div>
              </div>
              <div>
                <textarea
                  className="text-area"
                  placeholder="Digite aqui..."
                  onChange={(event) => handleDecrypt(event.target.value)}
                />
              </div>
              <div>
                <textarea
                  className="text-area"
                  value={decryptedWord}
                  readOnly={true}
                ></textarea>
              </div>
            </MiddleSection>
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
