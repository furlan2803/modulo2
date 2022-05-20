function buttonCalc(){

    const PrimeiroValor = parseFloat(document.getElementById('form1').value);
    const SegundoValor = parseFloat(document.getElementById('form2').value);
    const Operador = document.getElementById('Operador').value;
    let Resultado = null;

    if (Operador == "Soma"){

        Resultado = PrimeiroValor + SegundoValor
        document.getElementById('resultado').innerHTML = Resultado;
    }

    else if (Operador == "Subtração"){

        Resultado = PrimeiroValor - SegundoValor
        document.getElementById('resultado').innerHTML = Resultado;
    }

    else if (Operador == "Multiplicação"){

        Resultado = PrimeiroValor * SegundoValor
        document.getElementById('resultado').innerHTML = Resultado;
    }

    else if (Operador == "Divisão"){

        Resultado = (PrimeiroValor / SegundoValor).toFixed(2)
        document.getElementById('resultado').innerHTML = Resultado;
    }

    else if (Operador == "Divisão Inteira"){

        Resultado = Math.floor(PrimeiroValor / SegundoValor)
        document.getElementById('resultado').innerHTML = Resultado;
    }

    else if (Operador == "Resto"){

        Resultado = PrimeiroValor % SegundoValor
        document.getElementById('resultado').innerHTML = Resultado;
    }

    else{
        alert('Digite uma operação válida')
    }

};

