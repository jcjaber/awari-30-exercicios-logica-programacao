// Author: José Cássio Jaber
let n = prompt("Insira um valor: ")
let sum = 0

console.log("S = 0")

for(divisor = 1; divisor <= n; divisor++) {
  
  sum += 1 / divisor

  console.log("+ 1/", divisor, " = ", sum)
  
}
