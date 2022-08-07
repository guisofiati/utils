export {};

let list1 = [0, 2, 4, 6, 7, 10, 11];
let list2 = [];
let names = ["Maria", "Guilherme", "Antonio", "Zé"];

console.log("");
console.log("Coleção original:", list1);

console.log("");
console.log("---------------------- MAP ----------------------");

// map => aplica uma funcao para cada elemento da coleçao original
// e retorna uma nova coleçao com os valores atualizados

function double(x: number): number {
  return x * 2;
}

let arrayDouble = list1.map(double);
console.log("map dobro:", arrayDouble);

let arrayTriple = list1.map((element) => element * 3);
console.log("map triplo:", arrayTriple);

console.log("");
console.log("---------------------- FILTER ----------------------");

// filter => retorna uma nova coleção apenas com os elementos da coleçao que
// satisfazem o predicado informado

let arrayFiltered = list1.filter((x) => x > 8);
console.log("coleção filtrada:", arrayFiltered);
console.log("coleção filtrada count:", arrayFiltered.length);

function par(x: number): boolean {
  return x % 2 == 0;
}

let arrayFilteredPar = list1.filter(par);
console.log("apenas pares:", arrayFilteredPar);

let arrayFilteredParLambda = list1.filter((x) => x % 2 == 0);
console.log("apenas pares (lambda):", arrayFilteredParLambda);

console.log("");
console.log("----------------------REDUCE ----------------------");

// reduce => aplica CUMULATIVAMENTE uma funcao aos elementos da coleçao, retornando o
// resultado final. *Pode-se inserir um valor inicial como param

function sum(x: number, y: number): number {
  return x + y;
}

let reduce1 = list1.reduce(sum);
console.log("reduce:", reduce1);
// somou todos os elementos
/*
0 + 0 = 0
0 + 2 = 2
2 + 4 = 6 ...
*/

let reduce2 = list2.reduce(sum, 0);
console.log("reduce:", reduce2);

let reduce3 = list1.reduce((anterior, atual) => anterior + atual, 10);
console.log("reduce (lambda):", reduce3); // 0 + 0 + 2 + 6 + 7 + 10 + 11 = 50

console.log("");
console.log("---------------------- SORT ----------------------");

// sort => ordena a coleção original conforme a função informada como param

function comparePerSizeMenor(string1: string, string2: string): number {
  return string1.length - string2.length;
}

function comparePerSizeMaior(string1: string, string2: string): number {
  return string2.length - string1.length;
}

function comparePerAlphabeticalOrder(string1: string, string2: string): number {
  return string1.localeCompare(string2);
}

let sort1 = names.sort(comparePerSizeMenor);
console.log("sort por tamanho de nome (menor):", sort1);

let sort2 = names.sort(comparePerSizeMaior);
console.log("sort por tamanho de nome (maior):", sort2);

let sort3 = names.sort(comparePerAlphabeticalOrder);
console.log("sort por ordem alfabetica:", sort3);

let sort4 = names.sort((name1, name2) => name1.length - name2.length);
console.log("sort por tamanho de nome - menor - (lambda):", sort4);

let sort5 = names.sort((name1, name2) => name2.length - name1.length);
console.log("sort por tamanho de nome - maior - (lambda):", sort5);
