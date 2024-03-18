const imoveis = []
let opcao = ''

do{
opcao = prompt(`Bem Vindo Ao Cadastro De imoveis! \n Quantidade de imoveis: ${imoveis.length}\n Escolhe Uma opção: \n 1 - Salvar um Imovel\n 2 - Mostrar Imoveis\n 3 - Sair ` )

    switch(opcao){
        case '1':
            const imovel = {}

            imovel.proprietario = prompt('Qual o Nome do Proprietario?')
            imovel.qtQuartos = prompt('Quantos Quartos?')
            imovel.qtBanheiro = prompt('Quantos Banheiros?')
            imovel.garagem = prompt('Possui Garagem? Sim/Não')

            const confirmacao = confirm(
                `Salvar este Imovel?\n 
                Proprietario: ${imovel.proprietario}\n 
                Quartos: ${imovel.qtQuartos}\n 
                Banheiros: ${imovel.qtBanheiro}\n 
                Garagem: ${imovel.garagem}`)
                
                if(confirmacao){
                    imoveis.push(imovel)
                }
                break

        case '2':
            for(let i = 0; i<imoveis.length; i++){
                alert(
                    `Imovel ${i+1} \n 
                    Proprietario: ${imoveis[i].proprietario} \n
                    Quartos: ${imoveis[i].qtQuartos} \n
                    Banheiros: ${imoveis[i].qtBanheiro} \n
                    Garagem: ${imoveis[i].garagem}`
                )
            }
            break
            
        
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção Invalida.')
            


    }
    

}while(opcao !== '3')