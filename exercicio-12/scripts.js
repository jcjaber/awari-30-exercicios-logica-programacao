//Author: José Cássio Jaber

const squareSideSize = prompt('I M P R E S S O R A  DE  Q U A D R A D O S\n Digite o tamanho do lado do seu quadro (entre 2 a 20)');

const printSquare = () => {
  let squareTopBottom = '';
  let squareMiddle = '* ';

  for (i = 0; i < squareSideSize; i++) {
    squareTopBottom += '* ';
  }
  for(i = 0; i < squareSideSize-2; i++) {
    squareMiddle += '  ';
  }

  let square = squareTopBottom + '\n';

  if(squareSideSize > 2) {
    squareMiddle+= '*';
    for(i = 0; i < squareSideSize-2; i++) {
      square += squareMiddle + '\n';
    }
  }

  square += squareTopBottom

  console.log(square);
}

if(squareSideSize < 2 || squareSideSize > 20) {
  console.log('Número inválido, tente outra vez.');
} else {
  printSquare();
}





