//Author: José Cássio Jaber

const number = prompt('I M P R E S S O R A  DE  Q U A D R A D O S\n Digite o tamanho do lado do seu quadro (entre 1 a 20)');


let sides = '';
let triangule = '';

if (number < 1 || number > 20) {
  console.log('Número inválido. Tente de novo.')
} else {
  for (i = 0; i < number; i++) {
    sides += '*';
    triangule += sides + '\n'
  }
  console.log(triangule)
}


