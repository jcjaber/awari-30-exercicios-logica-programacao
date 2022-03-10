//Author: José Cássio Jaber

const num = prompt('Digite um número inteiro: ');
let evens = 'Pares: ';
let odds = 'Ímpares: ';
for(i = 0; i <= num; i++) {
  if(i % 2 === 0) {
    evens += `${i} `
  } else {
    odds += `${i} `
  }
}
alert(evens + '\n' + odds)






