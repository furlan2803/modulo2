function calculo(){
    // alert( 'teste click') - Teste do clique do botão
    const valor = document.getElementById('valor').value;
    const resultado = document.getElementById('resultado');
    const resultado2 = document.getElementById('resultado2');

    if (valor !== ''){
        // alert('preenchido') - Teste Valor do form preenchido
        const valorHmax = (valor * valor / (2 * 10)).toFixed(2);
        const valorTs = (valor / 10).toFixed(2);

        resultado.innerHTML = valorHmax;
        resultado2.innerHTML = valorTs;
    }
    else{
        alert('Preencha o campo de "Velocidade Inicial"')
    }
}