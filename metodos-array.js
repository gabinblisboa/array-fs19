// 1 - Criar um array de numeros de 1 ao 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2 - Adicionar um elemento no final
// console.log(numeros.push(50), numeros);
numeros.push(50);

// 3 - Adicionar 3 elementos: 100, 200, 400

numeros.push(100, 200, 400)
console.log(numeros);

let novosNumeros = [100, 200, 400];
numeros.push(novosNumeros);
console.log(numeros);

// 4 - Remover o útimo elemento
numeros.pop();
console.log(numeros);

// 5 - Adicionar elemento no inicio do array
numeros.unshift(0);
console.log(numeros)

// 6 - Procurar um elemento pelo índice

// 6.1 - Tamanho do array
console.log(`O tamanho do array é: ${numeros.length}`);

// 6.2 - inserir no meio

let meio = (numeros.lenght) / 2;
let meioArredondado = Math.floor(meio);

numeros.splice(meioArredondado, 0, 'Novo elemento')

console.log(numeros);

console.log(meioArredondado);

// 7 - Criar um array de números passando um início e o fim

/*let array = Array.from({ length: 10}, (_, item) => 1 + i);
console.log(array);*/

let array = Array.from({ length: 10}, (_, index) => console.log(`Item${index + 1}`));
//console.log(array);


// 8 - Criar uma função onde passa o início e o fim de uma lista de Item, do 'Item[inicio]' até o 'Item[fim]'

const criarArrayItem = (inicio, fim) => {
    let tamanho = fim - inicio + 1;
    let array = Array.from({ length: tamanho}, ())
}
criarArrayItem(1, 1000)