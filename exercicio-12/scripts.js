//Author: José Cássio Jaber

const squareSideSize = prompt('I M P R E S S O R A  DE  Q U A D R A D O S\n Digite o tamanho do lado do seu quadro (entre 2 a 20)');

const printSquare = () => {
  let lines = '';

  for (i = 0; i < squareSideSize; i++) {
    lines += '* ';
  }
  lines += '\n';
  let square = lines;

  if(squareSideSize > 1) {
    for(i = 0; i < squareSideSize-1; i++) {
    square += lines;
    }
  }
  console.log(square);
}

if(squareSideSize < 2 || squareSideSize > 20) {
  console.log('Número inválido, tente outra vez.');
} else {
  printSquare();
}





