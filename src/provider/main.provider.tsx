import React, { createContext, useState } from "react";
import * as math from "mathjs";
import { toast } from "react-toastify";

interface iMainProviderProps {
  children: React.ReactNode;
}

interface iMainContext {
  key: number[][];
  setKey: React.Dispatch<React.SetStateAction<number[][]>>;
  generateKey: () => number[][];
  wordToMatrix: (word: string) => number[][];
  transformMatrix: (matrix: number[][]) => number[][];
  cryptResult: (matrix: number[][]) => string[][];
  wordMatrix: number[][];
  cryptedWord: string[][];
  finalWord: string | undefined;
  list: any[];
  toReverseKey: (key: number[][]) => number[][];
  matrixToWord: (text: string, key: number[][]) => void;
  decryptedWord: string;
}

export const MainContext = createContext({} as iMainContext);

export const MainProvider = ({ children }: iMainProviderProps) => {
  const [key, setKey] = useState<number[][]>([]);
  const [wordMatrix, setWordMatrix] = useState<number[][]>([]);
  const [cryptedWord, setCryptedWord] = useState<string[][]>([]);
  const [finalWord, setFinalWord] = useState<string>();
  const [decryptedWord, setDecryptedWord] = useState<string>("");

  const list: any[] = [
    { A: 1 },
    { B: 2 },
    { C: 3 },
    { D: 4 },
    { E: 5 },
    { F: 6 },
    { G: 7 },
    { H: 8 },
    { I: 9 },
    { J: 10 },
    { K: 11 },
    { L: 12 },
    { M: 13 },
    { N: 14 },
    { O: 15 },
    { P: 16 },
    { Q: 17 },
    { R: 18 },
    { S: 19 },
    { T: 20 },
    { U: 21 },
    { V: 22 },
    { W: 23 },
    { X: 24 },
    { Y: 25 },
    { Z: 26 },
    { a: 27 },
    { b: 28 },
    { c: 29 },
    { d: 30 },
    { e: 31 },
    { f: 32 },
    { g: 33 },
    { h: 34 },
    { i: 35 },
    { j: 36 },
    { k: 37 },
    { l: 38 },
    { m: 39 },
    { n: 40 },
    { o: 41 },
    { p: 42 },
    { q: 43 },
    { r: 44 },
    { s: 45 },
    { t: 46 },
    { u: 47 },
    { v: 48 },
    { w: 49 },
    { x: 50 },
    { y: 51 },
    { z: 52 },
    { 0: 53 },
    { 1: 54 },
    { 2: 55 },
    { 3: 56 },
    { 4: 57 },
    { 5: 58 },
    { 6: 59 },
    { 7: 60 },
    { 8: 61 },
    { 9: 62 },
    { "?": 63 },
    { ";": 64 },
    { ">": 65 },
    { "<": 66 },
    { "&": 67 },
    { "%": 68 },
    { $: 69 },
    { "#": 70 },
    { "@": 71 },
    { "!": 72 },
    { "*": 73 },
    { "^": 74 },
    { "~": 75 },
    { ":": 76 },
    { "'": 77 },
    { "|": 78 },
    { "/": 79 },
    { "[": 80 },
    { "]": 81 },
    { "{": 82 },
    { "}": 83 },
    { "(": 84 },
    { ")": 85 },
    { "-": 86 },
    { _: 87 },
    { "+": 88 },
    { "=": 89 },
    { ".": 90 },
    { ",": 91 },
    { " ": 92 },
    { á: 93 },
    { Á: 94 },
    { à: 95 },
    { À: 96 },
    { â: 97 },
    { Â: 98 },
    { ã: 99 },
    { Ã: 100 },
    { é: 101 },
    { É: 102 },
    { ê: 103 },
    { Ê: 104 },
    { í: 105 },
    { Í: 106 },
    { ó: 107 },
    { Ó: 108 },
    { ô: 109 },
    { Ô: 110 },
    { õ: 111 },
    { Õ: 112 },
    { ú: 113 },
    { Ú: 114 },
    { ç: 115 },
    { "—": 116 },
    { "¹": 117 },
    { "²": 118 },
    { "³": 119 },
    { "£": 120 },
    { ª: 121 },
    { º: 122 },
    { " ": 123 },
    { "–": 124 },
    { "\n": 125 },
    { "	": 126 },
  ];

  const transformText = (list: string[][]) => {
    setFinalWord(list.map((innerArray) => innerArray.join("")).join(""));
  };

  const generateKey = (): number[][] => {
    let a, b, c, d;
    do {
      // Gerar valores aleatórios para a, b, c e d, evitando 0
      a = Math.floor(Math.random() * 999) + 1; // De 1 a 999
      b = Math.floor(Math.random() * 999) + 1; // De 1 a 999
      c = Math.floor(Math.random() * 999) + 1; // De 1 a 999
      d = Math.floor(Math.random() * 999) + 1; // De 1 a 999
    } while (a * d - b * c !== 1); // Verifique se o determinante é igual a 1

    // Crie a matriz 2x2 com os valores calculados
    const matrix = [
      [a, b],
      [c, d],
    ];
    return matrix;
  };

  //transforma os caracteres do input do usuário em matriz númerica
  const wordToMatrix = (word: string): number[][] => {
    const result: number[][] = [];
    for (const char of word) {
      const charToNumber: any = list.find((item: any) => item[char]);

      if (charToNumber) {
        result.push(charToNumber[char]);
      } else {
        result.push([0, 0]);
      }
    }

    const newList: number[][] = [];

    for (let i = 0; i < result.length; i += 2) {
      const pair: any = [result[i], result[i + 1]];
      newList.push(pair);
    }

    //se houver undefined o valor é trocado para 0
    for (let i = 0; i < newList.length; i++) {
      for (let j = 0; j < newList[i].length; j++) {
        if (newList[i][j] == undefined) {
          newList[i][j] = 0;
        }
      }
    }

    return newList;
  };

  //aqui os números da matriz resultante são tratados para que não sejam superiores ao tamanho da lista
  const transformMatrix = (
    matrix: number[][],
    decrypting?: boolean
  ): number[][] => {
    const listSize = list.length;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        while (matrix[i][j] < 0) {
          matrix[i][j] += listSize;
        }
        while (matrix[i][j] > listSize) {
          matrix[i][j] -= listSize;
        }
      }
    }

    if (!decrypting) {
      setWordMatrix(matrix);
    }

    return matrix;
  };

  //função que obtém o resultado da criptografia
  const cryptResult = (
    matrix: number[][],
    decrypting?: boolean
  ): string[][] => {
    const result = [];

    for (const row of matrix) {
      const newRow = [];
      for (const number of row) {
        const correspondingChar = list.find(
          (item) => Object.values(item)[0] === number
        );
        if (correspondingChar) {
          newRow.push(Object.keys(correspondingChar)[0]);
        } else {
          newRow.push("");
        }
      }
      result.push(newRow);
    }
    if (!decrypting) {
      setCryptedWord(result);
      transformText(result);
    }

    return result;
  };

  //reverte a chave para descriptografar
  const toReverseKey = (key: number[][]): number[][] => {
    const newKey: number[][] = [];

    const a = key[1][1];
    const b = key[0][1] * -1;
    const c = key[1][0] * -1;
    const d = key[0][0];

    newKey.push([a, b]);
    newKey.push([c, d]);

    return newKey;
  };

  //essa função transforma a matriz da multiplica de descriptografia em letras, no caso a palavra descriptografada
  const matrixToWord = (text: string, key: number[][]) => {
    try {
      let matrix: number[][] = [];

    const values = [];

    for (let i = 0; i < text.length; i++) {
      const letra = text[i];
      const filteredObjects = list.filter(
        (obj) => Object.keys(obj)[0] === letra
      );
      const letterValues = filteredObjects.map((obj) => obj[letra]);

      values.push(...letterValues);
    }

    if (values.length % 2 !== 0) {
      values.push(0);
    }

    for (let i = 0; i < text.length; i++) {
      const array = values.splice(0, 2);
      if (array.length > 1) {
        matrix.push(array);
      }
    }

    const multiplyMatrixResult = math.multiply(matrix, toReverseKey(key));
    const letterMatrix: string[][] = cryptResult(
      transformMatrix(multiplyMatrixResult, true),
      true
    );
    let newString: string = "";

    letterMatrix.forEach((array) => {
      array.forEach((letter) => {
        newString += letter;
      });
    });
    setDecryptedWord(newString);
    return newString;
    } catch (error) {
      toast.error("Erro ao descriptografar")
    }
  };

  return (
    <MainContext.Provider
      value={{
        cryptResult,
        generateKey,
        key,
        setKey,
        transformMatrix,
        wordToMatrix,
        wordMatrix,
        cryptedWord,
        finalWord,
        list,
        toReverseKey,
        matrixToWord,
        decryptedWord,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
