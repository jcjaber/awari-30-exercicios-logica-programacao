//Author: José Cássio Jaber

let ages = [];

function readAges() {
  for(index = 0; index < 15; index++) {
    ages[index] = prompt("Qual a idade da pessoa número " + (index+1) + "?")
  }
}

function listAgesByQuantity(){
  let minor15 = 0
  let minor30 = 0
  let minor45 = 0
  let minor60 = 0
  let upper61 = 0
  
  for(index = 0; index < 15; index++) {
    if(ages[index] <= 15){
      minor15++
    } else if(ages[index] <= 30){
       minor30++
    } else if(ages[index] <= 45){
       minor45++
    } else if(ages[index] <= 60){
       minor60++
    } else {
       upper61++
    }
  }

  console.log("\n Q U A N T I D A D E S  P E S S O A S\n\n Até 15anos: " + minor15 + "\nDe 16 a 30 anos: " + minor30 + "\nDe 31 a 45 anos: " + minor45 + "\nDe 46 a 60 anos: " + minor60 + "\nAcima de 61 anos: " + upper61)

  console.log("\n P O R C E N T A G E M  P O R  F A I X A  E T Á R I A\n\n Até 15anos: " + (minor15*100)/15 + "%\nDe 16 a 30 anos: " + (minor30*100)/15 + "%\nDe 31 a 45 anos: " + (minor45*100)/15 + "%\nDe 46 a 60 anos: " + (minor60*100)/15 + "%\nAcima de 61 anos: " + (upper61*100)/15 + "%")
}

readAges();
listAgesByQuantity();



