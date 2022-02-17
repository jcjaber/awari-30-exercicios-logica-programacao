let factor1 = 1
let factor2 = 1

while (factor1 <= 10){
  while(factor2 <= 10) {
    let product = factor1 * factor2
    console.log(factor1, " X ", factor2, " = ", product)
    factor2++
  }  
  factor1++
  factor2 =1
}
