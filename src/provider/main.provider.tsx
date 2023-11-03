import React, { createContext, useState } from "react";

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
  list: [];
}

export const MainContext = createContext({} as iMainContext);

export const MainProvider = ({ children }: iMainProviderProps) => {
  const [key, setKey] = useState<number[][]>([]);
  const [wordMatrix, setWordMatrix] = useState<number[][]>([]);
  const [cryptedWord, setCryptedWord] = useState<string[][]>([]);
  const [finalWord, setFinalWord] = useState<string>();

  const list = [
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
    { 1: 53 },
    { 2: 54 },
    { 3: 55 },
    { 4: 56 },
    { 5: 57 },
    { 6: 58 },
    { 7: 59 },
    { 8: 60 },
    { 9: 61 },
    { "?": 62 },
    { ";": 63 },
    { ">": 64 },
    { "<": 65 },
    { "&": 66 },
    { "%": 67 },
    { $: 68 },
    { "#": 69 },
    { "@": 70 },
    { "!": 71 },
    { "*": 72 },
    { "^": 73 },
    { "~": 74 },
    { "`": 75 },
    { ":": 76 },
    { "'": 77 },
    { "|": 78 },
    { "/": 79 },
    { ":": 80 },
    { "[": 81 },
    { "]": 82 },
    { "{": 83 },
    { "}": 84 },
    { "(": 85 },
    { ")": 86 },
    { "-": 87 },
    { _: 88 },
    { "+": 89 },
    { "=": 90 },
    { "`": 91 },
    { "¬": 92 },
    { "¦": 93 },
    { ".": 94 },
    { ",": 95 },
    { " ": 96 },
  ];

  const transformText = (list: string[][]) => {
    setFinalWord(list.map((innerArray) => innerArray.join("")).join(""));
  };

  const generateKey = (): number[][] => {
    let a, b, c, d;
    do {
      // Gerar valores aleatórios para a, b, c e d, evitando 0
      a = Math.floor(Math.random() * 99) + 1; // De 1 a 99
      b = Math.floor(Math.random() * 99) + 1; // De 1 a 99
      c = Math.floor(Math.random() * 99) + 1; // De 1 a 99
      d = Math.floor(Math.random() * 99) + 1; // De 1 a 99
    } while (a * d - b * c !== 1); // Verifique se o determinante é igual a 1

    // Crie a matriz 2x2 com os valores calculados
    const matrix = [
      [a, b],
      [c, d],
    ];
    return matrix;
  };

  const wordToMatrix = (word: string): number[][] => {
    const result: number[][] = [];
    for (const char of word) {
      const charToNumber: any = list.find((item: any) => item[char]);

      if (charToNumber) {
        result.push(charToNumber[char]);
      } else {
        // Handle characters that are not in the list, e.g., spaces or special characters.
        // You can choose to handle them in your own way, for example, skip them or assign a specific value.
        result.push([0, 0]); // Assign [0, 0] to characters not in the list.
      }
    }

    const newList: number[][] = [];

    for (let i = 0; i < result.length; i += 2) {
      const pair = [result[i], result[i + 1]];
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

  const transformMatrix = (matrix: number[][]): number[][] => {
    //aqui os números da matriz resultante são tratados para que não sejam superiores a 52 nem inferiores a 0, que é o comprimento da nossa tabela
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

    setWordMatrix(matrix);
    return matrix;
  };

  const cryptResult = (matrix: number[][]): string[][] => {
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
    setCryptedWord(result);
    transformText(result);
    return result;
  };

  /*   console.log(
    cryptResult(
      transformMatrix(
        math.multiply(wordToMatrix("BOLA"), [
          [1, 3],
          [2, 7],
        ])
      )
    )
  ); */

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
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
