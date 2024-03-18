const name1 = prompt ("Qual o Seu nome?")
const speed1 = parseFloat(prompt ("Qual a primeira velocidade?"))

const speed2 = parseFloat(prompt ("Qual a segunda velocidade?"))


if (speed1 > speed2) {
    alert(name1 + " " + speed1 + " é a maior Velocidade")
} else if (speed2 > speed1){
    alert(name1 + " " + speed2 +" é a maior velocidade")
}else{
    alert (name1 + " as velocidas são iguais")
}
