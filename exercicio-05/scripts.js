//Author: José Cássio Jaber

let a = prompt("Digite um valor: ");
let b = prompt("Digite um valor: ");
let c = prompt("Digite um valor: ");

let array = []
array.push(a, b, c)

console.log("Ordem lida: ", array)
321
array.sort((a, b) => a - b)

console.log("Ordem crescente:", array)

console.log("Ordem decrscente: ", array.reverse())


