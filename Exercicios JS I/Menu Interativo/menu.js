
let opcao = ""

do{
    opcao = prompt("Escolha sua opção: \n 1-Cidade\n 2-Interior\n 3-Praia\n 4-Cachoeira\n 5- Encerrar" )

    switch (opcao){
        case "1":
            alert("Você escolheu Cidade")
                break
        case "2":
            alert("Você escolheu Interior")
                break
        case "3":
            alert("Você escolheu Praia")
                break
        case "4":
            alert("Você escolheu Cachoeira")
                break
        case "5":
            alert("Você escolheu Encerrar")
            alert("o sistema está sendo encerrado")
                break

        default:
            alert("Opção Invalida")
    }
    
    
} while(opcao != "5")
    
