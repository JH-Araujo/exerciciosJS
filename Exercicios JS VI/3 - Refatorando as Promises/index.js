async function imc(weight, height) {
    if (typeof weight !== 'number' || typeof height !== 'number'){
        return Promise.reject('arguments must be of type number')
    }
    return weight / (height * height)
        
}

async function ShowImc(weight, height){

    try{
        console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`)

        const result = await imc(weight, height)

        console.log(`O resultado do IMC foi de ${result}.`)

        if (result < 18.5) console.log('Situação: MAGREZA')
    else if (result < 25) console.log('Situação: NORMAL')
    else if (result < 30) console.log('Situação: SOBREPESO')
    else if (result < 40) console.log('Situação: OBESIDADE')
    else console.log('Situação: OBESIDADE GRAVE')
    } catch (error) {
        console.log(error)
      }
    
}

ShowImc(71, 1.74)
ShowImc(48, 1.60)
ShowImc(71, "texto")
ShowImc(82, 1.72)
ShowImc(120, 1.80)
