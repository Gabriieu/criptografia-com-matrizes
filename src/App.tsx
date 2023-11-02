import { useEffect, useContext, useState } from "react";
import { BottomSection, MainStyled } from "./App";
import { MainContext } from "./provider/main.provider";
import * as math from "mathjs";
import table from "./assets/table.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

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
  } = useContext(MainContext);
  const [displayTable, setDisplayTable] = useState<boolean>(false);

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
                  <input disabled={true} type="number" value={key[0][0]} />
                  <input disabled={true} type="number" value={key[0][1]} />
                </div>
                <div>
                  <input disabled={true} type="number" value={key[1][0]} />
                  <input disabled={true} type="number" value={key[1][1]} />
                </div>
              </div>
              <div id="input-word">
                <h2>PALAVRA PARA CRIPTOGRAFAR</h2>
                <input
                  type="text"
                  onChange={(event) => handleInput(event.target.value)}
                  placeholder="Digite a palavra..."
                />
              </div>
              <div id="key-inputs">
                {wordMatrix.length > 0 ? (
                  <>
                    <h2>MATRIZ RESULTANTE</h2>
                    <div>
                      <input
                        disabled={true}
                        type="number"
                        value={wordMatrix[0][0]}
                      />
                      <input
                        disabled={true}
                        type="number"
                        value={wordMatrix[0][1]}
                      />
                    </div>
                    <div>
                      <input
                        disabled={true}
                        type="number"
                        value={wordMatrix[1][0]}
                      />
                      <input
                        disabled={true}
                        type="number"
                        value={wordMatrix[1][1]}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <input disabled={true} type="number" />
                      <input disabled={true} type="number" />
                    </div>
                    <div>
                      <input disabled={true} type="number" />
                      <input disabled={true} type="number" />
                    </div>
                  </>
                )}
              </div>
              <div id="input-word">
                <h2>RESULTADO</h2>
                {cryptedWord.length > 0 ? (
                  <input type="text" disabled={true} value={finalWord} />
                ) : (
                  <input type="text" disabled={true} value={"Aguardando..."} />
                )}
              </div>
            </section>
            <BottomSection>
              <div>
                {displayTable ? (
                  <>
                    <h2 onClick={() => setDisplayTable(false)}>
                      ESCONDER TABELA DE REFERÊNCIA
                      <AiFillEyeInvisible size={24} />
                    </h2>
                    <img src={table} alt="" />
                  </>
                ) : (
                  <h2 onClick={() => setDisplayTable(true)}>
                    MOSTRAR TABELA DE REFERÊNCIA <AiFillEye size={24} />
                  </h2>
                )}
              </div>
            </BottomSection>
          </MainStyled>
          <footer></footer>
        </>
      )}
    </>
  );
}

export default App;
