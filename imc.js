let peso = parseFloat(prompt("Informe seu peso:"))
let altura = parseFloat(prompt("Informe sua altura:"))

if(isNaN(peso)||isNaN(altura)||peso<=0||altura<=0){
    document.write("Por favor informe valores válidos!!!");
}
else{
    let imc=(peso)/(altura*altura)
    document.write("O seu IMC é igual a:");
    if (imc<18.5){
        document.write("Abaixo do peso")
    }
    else if (imc>=18.5 && imc <=24.9){
        document.write("Peso normal")
    }
    else if (imc>=25 && imc <=29.9){
        document.write("Sobrepeso")
    }
    else if (imc>=30 && imc <=34.9){
        document.write("Obesidade grau I")
    }
    else if (imc>=35 && imc <= 39.9){
        document.write("Obesidade grau II")
    }
    else if (imc>=40 && imc <=49.9){
        document.write("Obesidade grau III")
    }
    else if (imc>=50 && imc <=59.9){
        document.write("Obesidade grau IV")
    }
    else if (imc>=60){
        document.write("Obesidade grau V")
    }
}