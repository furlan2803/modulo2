const text1 = document.getElementById('form1');
const text2 = document.getElementById('form2');

function btnEnvio(){

    var valor1 = parseInt(text1.value);
    var valor2 = text2.value;

    if((valor2 == "Diurno" || valor2 == "diurno") & (valor1 <= 50)){
        var total = 200 * valor1;
        alert("R$ 200,00 por pessoa" + "O total da viagem é R$ " + total)
    }
    else if((valor2 == "Diurno" || valor2 == "diurno" ) & (valor1 > 50)){
        var aux = 200 - (200 * 0.4);
        var total = aux * valor1;
        alert("R$ " + aux + ",00 por pessoa" + "O total da viagem é R$ " + total)
    }

    else if((valor2 == "Noturno" || valor2 == "noturno") & (valor1 <= 50)){
        var total = 100 * valor1;
        alert("R$ 100,00 por pessoa" + "O total da viagem é R$ " + total)
    }
    else if((valor2 == "Noturno" || valor2 == "noturno" ) & (valor1 > 50)){
        var aux = 100 - (100 * 0.2);
        var total = aux * valor1;
        alert("R$ " + aux + ",00 por pessoa" + "O total da viagem é R$ " + total)
    }
    else{
        alert("\nValores Inválidos! \n\n Digite Novamente!")
    }
 
}