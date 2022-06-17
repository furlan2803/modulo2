// função iniciada quando um botão é clicado no html
function buttonCalcSoma() {

    // variáveis responsáveis por pegar o valor dos inputs pelo id no html
    let number1 = document.getElementById('form1').value;
    let number2 = document.getElementById('form2').value;

    // condição responsável por verificar se nenhum campo do input está vazio
    if ((number1 == "" && number2 == "") || (number1 == "") || (number2 == "")){

        // mensagem de erro ao usuário, informando que os números digitados são inválidos
        Swal.fire({
            icon: 'error',
            title: 'Oops... Números inválidos',
            text: '_________________________________________'
        })

    } else {

        // o for roda enquanto a variável aux (com o valor da variável number1) for menor ou igual a o number2
        for ( let aux = number1; aux <= number2; aux++){

            // declaração da variável cont
            let cont = 0;

            // declaração da variável numbem com valor 2, e o for roda enquanto number for menor que a variável auxiliar
            for( let number = 2; number < aux; number++){

                // se a divisão da variável aux pelo number tiver o resto da divisão igual a zero
                if(aux % number == 0){

                    // acrescenta 1 a variável cont
                    cont++
                }
            }

            // condição que se a variável cont for igual a zero o resultado é exibido na tela para o usuário 
            if(cont == 0 ){

                document.getElementById("result").innerHTML += aux + " - ";

            }
        }

    }
}
