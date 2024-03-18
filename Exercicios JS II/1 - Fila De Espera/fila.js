let fila = []
let opcao = ''

do{
    let pacientes = ''
    for(let i = 0; i < fila.length; i++)
    pacientes += (i + 1) + 'º - ' + fila[i]+ '\n'

    opcao = prompt(
        "Pacientes:\n" + pacientes +
        "\n Escolha uma ação:\n 1 - Novo paciente\n 2 - Consultar paciente\n 3 - Sair")

        switch(opcao){
            case '1':
                const novoPaciente = prompt('Qual nome do Paciente?')
                fila.push(novoPaciente)
                break
            
            case '2':
                const pacienteConsultado = fila.shift()
                if(pacienteConsultado){
                    alert(pacienteConsultado + ' Foi Atendido.')
                }
            alert('Não há pacientes para ser atendido')
                break
            
            case '3':
                alert('Encerrando...')
                break

            default:
                alert('Opçao Invalida')
        }


}while(opcao !== '3')

