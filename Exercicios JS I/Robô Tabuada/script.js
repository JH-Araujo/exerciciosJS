const numero = prompt('olá, informe o numero que voce deseja:')

let resultado = ''

for(let fator = 1; fator <= 10; fator++){
    resultado += '-> ' + numero + ' * ' + fator + ' = ' + (numero*fator) + '\n'
}


alert('resultado da tabuada de: ' + numero + ':\n\n' + resultado)