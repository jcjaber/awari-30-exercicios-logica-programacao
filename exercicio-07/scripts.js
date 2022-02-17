//Author: José Cássio Jaber
let count = 1
let valorBruto = 500
let desc = 0
console.log("ValorCompra |Desconto| Valor Final")
while (count <= 50) {
  
  desc =  valorBruto * (count / 100)
  valorDesc = valorBruto - desc

  console.log("R$ ", valorBruto, "    | ", count, " %  |  R$ ", valorDesc)

  count++
  valorBruto += 100
}



