//Author: José Cássio Jaber

app();

function app() {
  let entries = 1;
  let ages = [];
  while (entries <= 10) {
    ages.push(prompt('Insira o nome '+ entries + ': '));
    entries++;
  } 
  let numbOfAge = countMajority(ages);
  printNumbOfAges(numbOfAge);
}

function countMajority(age) {
  let countMajority = 0;
  for(i = 0; i < 10; i++){
    if(age[i] >= 18) {
      countMajority += 1;
    }
  }
  return countMajority;
}

function printNumbOfAges(ofAges) {
  alert('Há ' + ofAges + ' maiores de idade!');
}

