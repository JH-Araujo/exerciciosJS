let valor = parseFloat(prompt("Qual a Quantidade Inicial de dinheiro?"))
let opcao = ""

do{
    opcao = prompt("Valor inicial é: " + valor + "\n Escolha a opção: \n 1-Adicionar \n 2-Remover\n 3- Sair")
   
    switch(opcao){
        case "1":
            valor += parseFloat(prompt("Qual valor para Adicionar?"))
            alert("Novo valor é: " + valor)
                break
        case "2":
            let remover = parseFloat(prompt("Qual valor para remover?"))
            valor -= remover
            alert(`Novo valor é:  ${valor}`)
                break
        case "3":
            alert("Você escolheu Encerrar")
            alert("o sistema está sendo encerrado")
                break
        default:
            alert("Opção Invalida")        
    }
} while (opcao != "3")

