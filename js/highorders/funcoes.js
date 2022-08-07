"use strict";
exports.__esModule = true;
var list1 = [0, 2, 4, 6, 7, 10, 11];
var list2 = [];
var names = ["Maria", "Guilherme", "Antonio", "Zé"];
console.log("");
console.log("Coleção original:", list1);
console.log("");
console.log("---------------------- MAP ----------------------");
// map => aplica uma funcao para cada elemento da coleçao original
// e retorna uma nova coleçao com os valores atualizados
function double(x) {
    return x * 2;
}
var arrayDouble = list1.map(double);
console.log("map dobro:", arrayDouble);
var arrayTriple = list1.map(function (element) { return element * 3; });
console.log("map triplo:", arrayTriple);
console.log("");
console.log("---------------------- FILTER ----------------------");
// filter => retorna uma nova coleção apenas com os elementos da coleçao que
// satisfazem o predicado informado
var arrayFiltered = list1.filter(function (x) { return x > 8; });
console.log("coleção filtrada:", arrayFiltered);
console.log("coleção filtrada count:", arrayFiltered.length);
function par(x) {
    return x % 2 == 0;
}
var arrayFilteredPar = list1.filter(par);
console.log("apenas pares:", arrayFilteredPar);
var arrayFilteredParLambda = list1.filter(function (x) { return x % 2 == 0; });
console.log("apenas pares (lambda):", arrayFilteredParLambda);
console.log("");
console.log("----------------------REDUCE ----------------------");
// reduce => aplica CUMULATIVAMENTE uma funcao aos elementos da coleçao, retornando o
// resultado final. *Pode-se inserir um valor inicial como param
function sum(x, y) {
    return x + y;
}
var reduce1 = list1.reduce(sum);
console.log("reduce:", reduce1);
// somou todos os elementos
/*
0 + 0 = 0
0 + 2 = 2
2 + 4 = 6 ...
*/
var reduce2 = list2.reduce(sum, 0);
console.log("reduce:", reduce2);
var reduce3 = list1.reduce(function (anterior, atual) { return anterior + atual; }, 10);
console.log("reduce (lambda):", reduce3); // 0 + 0 + 2 + 6 + 7 + 10 + 11 = 50
console.log("");
console.log("---------------------- SORT ----------------------");
// sort => ordena a coleção original conforme a função informada como param
function comparePerSizeMenor(string1, string2) {
    return string1.length - string2.length;
}
function comparePerSizeMaior(string1, string2) {
    return string2.length - string1.length;
}
function comparePerAlphabeticalOrder(string1, string2) {
    return string1.localeCompare(string2);
}
var sort1 = names.sort(comparePerSizeMenor);
console.log("sort por tamanho de nome (menor):", sort1);
var sort2 = names.sort(comparePerSizeMaior);
console.log("sort por tamanho de nome (maior):", sort2);
var sort3 = names.sort(comparePerAlphabeticalOrder);
console.log("sort por ordem alfabetica:", sort3);
var sort4 = names.sort(function (name1, name2) { return name1.length - name2.length; });
console.log("sort por tamanho de nome - menor - (lambda):", sort4);
var sort5 = names.sort(function (name1, name2) { return name2.length - name1.length; });
console.log("sort por tamanho de nome - maior - (lambda):", sort5);
