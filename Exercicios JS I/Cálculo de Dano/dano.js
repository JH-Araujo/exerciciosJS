const atacante = prompt("Nome do personagem que vai atacar?")
const poderDeAtaque = parseFloat(prompt("Qual seu poder de ataque?"))

const defensor = prompt("Qual nome do Defensor?")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida?"))
const poderDeDefesa = parseFloat(prompt("Qual o poder de defesa?"))
const possuiEscudo = prompt("Possui escudo? (Sim/Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não"){
    danoCausado = poderDeAtaque - poderDeDefesa

} else if (poderDeAtaque > poderDeDefesa && possuiEscudo == "Sim"){
    danoCausado = (poderDeAtaque - poderDeDefesa) /2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)

alert(atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n"  +
defensor + "\nPontos de vida: " + pontosDeVida +
"\nPoder de defesa: " + poderDeDefesa + "\nPossui Escudo: " + possuiEscudo
)
