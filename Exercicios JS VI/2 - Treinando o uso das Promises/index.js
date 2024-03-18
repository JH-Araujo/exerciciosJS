function imc(weight, height) {
    return new Promise((resolve, reject) => {
        if (typeof weight !== 'number' || typeof height !== 'number'){
            reject('arguments must be of type number')
        }else{
            resolve(weight / (height * height))
        }
    })
}

function ShowImc(weight, height){
    imc(weight, height).then((result) => {
        console.log(`O resultado do IMC foi de ${result}.`)

        if (result < 18.5) console.log('Situação: MAGREZA')
    else if (result < 25) console.log('Situação: NORMAL')
    else if (result < 30) console.log('Situação: SOBREPESO')
    else if (result < 40) console.log('Situação: OBESIDADE')
    else console.log('Situação: OBESIDADE GRAVE')
    }).catch((err) => {
        console.log(err)
    })

    console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`)
}

ShowImc(71, 1.74)
ShowImc(48, 1.60)
ShowImc(71, "texto")
ShowImc(82, 1.72)
ShowImc(120, 1.80)
