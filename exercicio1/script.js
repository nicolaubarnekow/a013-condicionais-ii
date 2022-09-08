const num = Number(prompt('Descubra se o número é divisível por 2 ou por 3 ?'));

   if(num % 2 ===0){
    alert('Seu número é divisível por 2')
    console.log('Seu número é divisível por 2')
   } if(num % 3 ===0){
    alert('O seu número é divisível por 3')
    console.log('É divisível por 3')
   } if(num % 2 === 0 && num % 3 === 0){
    alert('Ele é divisível por 2 e por 3')
   } else{
    alert('Não é divisível por nenhum dos dois, tente novamente')
    console.log('Não é divisível por nenhum dos dois, tente novamente')
   }

