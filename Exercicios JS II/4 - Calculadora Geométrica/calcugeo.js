function areaTriangulo(base, altura){
    areaTri = (base * altura) /2
    return areaTri 
    // ou return base * altura / 2
}

function areaRetangulo(base, altura){
    areaRet = base * altura
    return areaRet
    // ou return base * altura
}

function areaQuadrado(lado, lado){
    areaQua = lado * lado
    return areaQua
    //ou return lado * lado
}

function areaTrapezio(baseMaior, baseMenor, altura){
    areaTrap = (baseMaior + baseMenor)* altura/2
    return areaTrap
    //ou return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo(raio){
    pi = 3.14
    areaCirc = pi * (raio * raio)
    return areaCirc
    // ou  return (3.14 * raio * raio)
}


opcao = ''

do{
    opcao = prompt('Escolha sua opção:\n 1 - Area do Triangulo\n 2 - Area do Retângulo\n 3 - Area Do Quadrado\n 4 - Area Do Trapézio\n 5 - Area Do circulo\n 6 - Sair')

    switch(opcao){
        case '1':
            base = parseFloat(prompt('Qual a Base do Triângulo?'))
            altura = parseFloat(prompt('Qual a Altura do Triângulo?'))
            alert('A Area Do triangulo é: ' + areaTriangulo(base, altura))
            break

        case '2':
            base = parseFloat(prompt('Qual a Base do Retangulo?'))
            altura = parseFloat(prompt('Qual a Altura do Retangulo?'))
            alert('A Area Do Retangulo é: ' + areaRetangulo(base, altura))
            break

        case '3':
            lado = parseFloat(prompt('Digite um dos Lados Do Quadrado:'))
            alert('A Area do quadrado é: ' + areaQuadrado(lado, lado))
            break

        case '4':
            baseMaior = parseFloat(prompt('Qual a maior base do Trapezio?'))
            baseMenor = parseFloat(prompt('Qual a menor base do Trapezio?'))
            altura = parseFloat(prompt('Qual a Altura do Trapezio?'))
            alert('A Area do trapezio é: ' + areaTrapezio(baseMaior, baseMenor, altura))
            break
        
        case '5':
            raio = parseFloat(prompt('Qual o raio do circulo?'))
            alert('A Area do circulo é: ' + areaCirculo(raio))
            break

        case '6':
            alert('Encerrando..')
            break

        default:
            alert('Opção Invalida.. ')
    }




}while(opcao !== '6')