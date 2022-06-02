const quant = document.getElementById('form1');

//Função que adiciona 1 no imput
function Soma(){
    var valor = parseInt(quant.value);
    var aux = valor + 1;
    quant.value = aux;
}

//Função que troca o número digitado pelo novo valor
function buttonCalcSoma() {
    Soma("form1");
}

//Função que diminui 1 no imput
function Subtrair(){
    var valor = parseInt(quant.value);
    var aux = valor > 0 ? valor - 1 : 0;
    quant.value = aux;
}

//Função que troca o número digitado pelo novo valor
function buttonCalcSubtrair() {
    Subtrair("form1");
}