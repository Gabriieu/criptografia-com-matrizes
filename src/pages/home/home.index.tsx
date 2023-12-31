import { useContext, useState, useRef, useEffect } from "react";
import { MainContext } from "../../provider/main.provider";
import * as math from "mathjs";
import { toast } from "react-toastify";
import { BottomSection, MainStyled, MiddleSection } from "./home.style";
import { TbReload } from "react-icons/tb";
import { FcKey } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { CaracterCard } from "../../components/caracter-card/caracter-card.index";

export const HomePage = () => {
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
  const textValue = useRef<HTMLTextAreaElement | null>(null);
  const decryptValue = useRef<HTMLTextAreaElement | null>(null);
  const keyMatrixReference = useRef<HTMLInputElement | null>(null);
  const [displayTable, setDisplayTable] = useState<boolean>(false);

  const handleInput = (text: string) => {
    if (text.length >= 4) {
      cryptResult(transformMatrix(math.multiply(wordToMatrix(text), key)));
    } else {
      toast.info("A palavra deve ter no mínimo 4 caracteres");
    }
  };

  const handleDecrypt = (text: string) => {
    if(decryptValue.current!.value.length < 4){
      toast.error("Informe o texto para descriptografar")
      return
    }
    if (decryptKey[0].length == 2 && decryptKey[1].length == 2) {
      matrixToWord(text, decryptKey);
    }else{
      toast.error("Informe a chave de descriptografia")
    }
  };

  useEffect(() => {
    setKey(generateKey());
  }, []);
  return (
    <>
      {key.length > 0 && (
        <>
          <MainStyled>
            <section>
              <h2 className="title">CRIPTOGRAFIA</h2>
              <div id="key-inputs">
                <h2>MATRIZ CHAVE</h2>
                <div>
                  <input
                    name="input"
                    className="disabled-input"
                    disabled={true}
                    type="number"
                    value={key[0][0]}
                    ref={keyMatrixReference}
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
                <TbReload
                  onClick={() => setKey(generateKey())}
                  color="blue"
                  size={24}
                />
              </div>
              <div className="container-inputs">
                <div className="input-word">
                  <h1>TEXTO</h1>
                  <textarea
                    className="text-area"
                    placeholder="Digite a palavra..."
                    ref={textValue}
                  />
                </div>

                <button onClick={() => handleInput(textValue.current?.value!)}>
                  Criptografar
                </button>
                <div className="input-word">
                  <h1>RESULTADO</h1>
                  {cryptedWord.length > 0 ? (
                    <textarea
                      className="text-area"
                      readOnly={true}
                      value={finalWord}
                    ></textarea>
                  ) : (
                    <textarea
                      className="text-area"
                      readOnly={true}
                      value="Aguardando..."
                    ></textarea>
                  )}
                </div>
              </div>
              {wordMatrix.length > 0 && (
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
              )}
            </section>
            <MiddleSection>
              <h2 className="title">DESCRIPTOGRAFIA</h2>
              <div id="key-inputs">
                <h2>MATRIZ CHAVE</h2>
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
                    value={decryptKey[0][0]}
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
                    value={decryptKey[0][1]}
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
                    value={decryptKey[1][0]}
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
                    value={decryptKey[1][1]}
                  />
                </div>
                <div>
                  <FcKey onClick={() => setDecryptKey(key)} size={24} />

                  <TbReload
                    onClick={() => setDecryptKey(generateKey())}
                    color="blue"
                    size={24}
                  />
                </div>
              </div>
              <div className="container-inputs">
                <div>
                  <textarea
                    className="text-area"
                    placeholder="Digite aqui..."
                    ref={decryptValue}
                  />
                </div>

                <button
                  onClick={() => handleDecrypt(decryptValue.current?.value!)}
                >
                  Descriptografar
                </button>
                <div>
                  <textarea
                    className="text-area"
                    value={decryptedWord}
                    readOnly={true}
                  ></textarea>
                </div>
              </div>
            </MiddleSection>
            <BottomSection>
              {displayTable ? (
                <h2
                  className="show-hide"
                  onClick={() => setDisplayTable(false)}
                >
                  ESCONDER TABELA <AiFillEyeInvisible size={18} />
                </h2>
              ) : (
                <h2 className="show-hide" onClick={() => setDisplayTable(true)}>
                  MOSTRAR TABELA <AiFillEye size={18} />
                </h2>
              )}

              {displayTable && (
                <ul>
                  {list.map((obj) => (
                    <CaracterCard obj={obj} key={math.random()} />
                  ))}
                </ul>
              )}
            </BottomSection>
          </MainStyled>
        </>
      )}
    </>
  );
};
