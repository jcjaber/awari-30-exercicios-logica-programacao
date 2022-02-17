//Author: José Cássio Jaber
let priceTicket = 5.00;
let expectQtt = 120;
let expenditure = 200.00;
let maxProfit = (priceTicket * expectQtt) - expenditure;

while(priceTicket >= 1) {
  console.log("Valor ingresso: ", parseFloat(priceTicket).toFixed(2), "| Qtde de venda max: ", parseFloat(expectQtt).toFixed(0), "| Lucro Máximo:", parseFloat(maxProfit).toFixed(2));

  priceTicket -= 0.5;
  expectQtt += 26;
  maxProfit = (priceTicket * expectQtt) - expenditure;
}

