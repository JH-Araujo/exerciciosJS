const palavra = prompt('Informe Uma Palavra: ')
let palavraInvertida = ''

for (let i = palavra.length -1; i >= 0; i--) {
     palavraInvertida += palavra[i]
}

if(palavra === palavraInvertida){
    alert(palavra + ' é um Palindromo!')
}else {
    alert('Não é um Palindromo!\n\n' + palavra + ' !== ' + palavraInvertida)
}