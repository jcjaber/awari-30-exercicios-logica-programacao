//Author: José Cássio Jaber

let cli1 = prompt("Diga o valor de compras do primeiro cliente: ");
let cli2 = prompt("Diga o valor de compras do segundo cliente: ");
let cli3 = prompt("Diga o valor de compras do terceiro cliente: ");
let cli4 = prompt("Diga o valor de compras do quarto cliente: ");
let cli5 = prompt("Diga o valor de compras do quinto cliente: ");

let faturamento = Number(cli1) + Number(cli2) + Number(cli3) + Number(cli4) + Number(cli5) 

let lojaB = 54000

if(faturamento >= lojaB) {
  console.log("Sua loja superou em R$ ", (faturamento - lojaB), "o faturamento da loja B")
} else {
  console.log("Sua loja não superou o faturamento da Loja B :(")
}



