// ************************
//Nullish Coalescing Operator
// ************************
const idade = 0;

// o operador lógico OU, reconhece que (0, false, null, undefined, '', []...)
// são valores indefinidos/falsos

//document.body.innerText = "Sua idade é: " + (idade || "Não informado");
// printa "Nao informado"

// então, podemos usar o ?? operator, ele olha pra valores que realmente não são validos
// como null e undefined, e o 0 é um valor real
document.body.innerText = "Sua idade é: " + (idade ?? "Não informado");

// ************************
// Objects
// ************************

const user = {
  name: "João",
  nickname: "Toov",
  idade: "22",
  address: {
    street: "Avenue 20th",
    number: 45,
  },
};

console.log("idade" in user);
console.log("nickname" in user);

document.body.innerText = JSON.stringify(Object.keys(user)); //name, age...
document.body.innerText = JSON.stringify(Object.values(user)); // João, 22..
document.body.innerText = JSON.stringify(Object.entries(user)); // vetor dentro de vetores, o primeiro é a chave e o segundo o valor

// ************************
// Destructuring
// ************************

//const address = user.address;
const { address, idade: age, nickname = "Boomer" } = user; // possivel renomear variaveis e valores default (caso n setado) na destructuring

document.body.innerText = JSON.stringify({ address, age, nickname });

// function showAge(user) {
//   return user.idade;
// }

function showAge({ idade }) {
  return idade;
}

document.body.innerText = showAge(user);

// ************************
// Rest Operator
// ************************

// const { name, ...rest } = user;

document.body.innerText = JSON.stringify(rest);

const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//const [first, secound, ...rest] = array;
const [first, , third, ...rest] = array; // pular o 2 elemento

// printa um array de key-value first:10...
document.body.innerText = JSON.stringify({ first, third, rest });

// ************************
// Short Syntax
// ************************

const nome = "Maria";
const sobrenome = "Santos";

const newUser = {
  nome,
  sobrenome,
};

document.body.innerText = JSON.stringify(newUser);

// ************************
// Optional Chaining
// ************************

// const user = {
//   name: "João",
//   nickname: "Toov",
//   idade: "22",
//   address: {
//     street: "Avenue 20th",
//     number: 45,
//     // zip: {
//     //   code: "845748548",
//     //   city: "SP",
//     // },
//   },
// };

// document.body.innerText = user.address
//   ? user.address.zip
//     ? user.address.zip.code
//     : "Não informado"
//   : "Não informado";

document.body.innerText = user.address?.zip?.code ?? "Não informado";

// ************************
// High Order Functions
// Map, Filter, Reduce, Every, Some, Find, FindIndex
// ************************

const arranjo = [2, 3, 5, 6, 8, 10, "hi"];

const isAllElementsNumber = arranjo.every((item) => typeof item === "number");

console.log(isAllElementsNumber);

const isSomeElementsNumber = arranjo.some((item) => typeof item === "number");

console.log(isSomeElementsNumber);

const firstPairInArray = arranjo.find((item) => item % 2 === 0);

console.log(firstPairInArray);

const indexOfFirstPairInArray = arranjo.findIndex((item) => item % 2 === 0);

console.log(indexOfFirstPairInArray);

const arranjo2 = [2, 3, 4, 5];

// começa com 0. 0 + 2 = 2, 2 + 3 = 5.....
const sum = arranjo2.reduce((accumulator, item) => {
  return accumulator + item;
}, 0);

console.log(sum); // 14
