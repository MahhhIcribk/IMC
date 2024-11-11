let peso = parseFloat(prompt("Informe seu peso:"))
let altura = parseFloat(prompt("Informe sua altura:"))

if(isNaN(peso)||isNaN(altura)||peso<=0||altura<=0){
    document.write("Por favor informe valores válidos!!!");
}
else{
    let.imc=(peso)/(altura*altura)
    document.write("O seu IMC é igual a:);
    if (imc=18&&imc<=24.9){
        document.write("Peso ideal")
    }
    else if (imc>24.9&&imc<=28){
    }
}