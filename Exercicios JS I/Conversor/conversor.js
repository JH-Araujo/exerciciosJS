const metros = parseFloat(prompt("Quanto metros?"))
const medida = parseFloat(prompt("Qual Unidade de medida par converter? \n1-Milimetro(mm) \n2-Centimetro(cm) \n3-Decímetro(dm) \n4-Decâmetro(dam) \n5-Hectômetro(hm) \n6-Quilômetro(km)"))

switch(medida) {
    case 1 :
        resultado = metros * 1000
        alert("O Resultado em Milimetros é "+ resultado + "mm")
        break
    case 2 :
        resultado = metros * 100
        alert("O Resultado em Centimetros é " + resultado + "cm")  
        break 
    case 3 :
        resultado = metros * 10
        alert("O Resultado em Decímetros é " + resultado + "dm")  
        break   
    case 4 :
        resultado = metros / 10
        alert("O Resultado em Decâmetro é " + resultado + "dam")    
        break 
    case 5 :
        resultado = metros / 100
        alert("O Resultado em Hectômetro é " + resultado + "hm")  
        break  
    case 6 :
        resultado = metros / 1000
        alert("O Resultado em Quilômetro é " + resultado + "km")  
        break
    default :
    alert("Opção inválida")
}