function calculo(){
    const valor1 = Number(document.getElementById('valor1').value);
    const valor2 = Number(document.getElementById('valor2').value);
    const resultado = document.getElementById('resultado');

    if (valor1 !== '' && valor2 !== ''){
        const soma = (valor1 + valor2).toFixed(2);

        resultado.innerHTML = soma;
    }
    else{
        alert('Preencha os campos');
    }
}

function resetar(){
    document.getElementById('valor1').value = "";
    document.getElementById('valor2').value = "";
}