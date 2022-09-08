let nacionalidade = prompt('digite aqui seu país de origem').toLowerCase();

switch (nacionalidade) {
  case 'brasil':
    console.log('A pessoa é brasileira');
    break;
  case 'argentina':
    console.log('A pessoa é argentina');
    break;
  case 'uruguai':
    console.log('A pessoa uruguaia');
    break;
  case 'colombia':
    console.log('A pessoa é colombiana');
    break;
  case 'chilena':
    console.log('A pessoa é Chilena');
    break;

  default:
    console.log('A pessoa é de NENHUM País');
    break;
}