import { useEffect, useContext, useState, useRef } from "react";
import { BottomSection, MainStyled } from "./App";
import { MainContext } from "./provider/main.provider";
import * as math from "mathjs";
import table from "./assets/table.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { TbReload } from "react-icons/tb";

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
  const userInput = useRef(null)
  const userOutput = useRef(null)

  const handleKeyChange = () => {
    setKey(generateKey());
  };

  const handleInput = (text: string) => {
    if (text.length >= 4) {
      cryptResult(transformMatrix(math.multiply(wordToMatrix(text), [[34,37],[45,49]])));
    }
  };

  useEffect(() => {
    setKey(generateKey());
  }, []);

/*   useEffect(() => {
    if(userInput.current.value.length < 4){
      console.log("sim")
    }
  },[userInput.current, userOutput]) */

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

                <TbReload onClick={handleKeyChange} />
              </div>
              <div className="input-word">
                <h2>PALAVRA PARA CRIPTOGRAFAR</h2>
                <input
                  type="text"
                  onChange={(event) => handleInput(event.target.value)}
                  placeholder="Digite a palavra..."
                  ref={userInput}
                />
              </div>
              <div id="matrix-result">
                <h2>MATRIZ RESULTANTE</h2>
                <div>
                  {wordMatrix.length > 0 &&
                    wordMatrix.map((list) =>
                      list.map((number) => (
                        <input
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
                  <input type="text" disabled={true} value={finalWord} ref={userOutput}/>
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
