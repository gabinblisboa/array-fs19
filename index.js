// 1 - criar uma lista vazia

let listaJogos = ['Lost Planet 3', 'Crash 3', 'Ace Combat']

let listaEstrelas = [{nome: 'Angelo', idade: 12}, 'Betegeuse', 'Sirius', 'Anilam']

// 2 - Alterar o ultimo item para maiusculo

console.log(listaJogos[2].toUpperCase());

// 3 - Alterar todos os elementod para maiusculo

let pessoas = [
 'AnGELO lustosa',
 'Juan bEnJamin',
 'MAteuS ArANHA'
]
// 3.1 - Map com arrow function
// pessoas.map((item) => console.log(item.toUpperCase()))

// 3.2 - forEach sem arrow function

// pessoas.forEach(function(item) {return console.log(item.toUpperCase());})

// pessoas.map(function(item)) {return item.toUpperCase();})

pessoas.map((item) => console.log(item.toUpperCase()));
//