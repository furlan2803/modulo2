// Função executada quando o botão do html é clicado
function buttonCalcSoma() {

    // responsável por pegar o valor do input pelo id
    const number = document.getElementById('form1').value;

    // condição, se o número digitado for maior ou igual a 1000, irá aparecer um erro
    if (number >= 1000){

        // mensagem de erro para o usuário, mostrando que o número digitado é inválido
        Swal.fire({
            icon: 'error',
            title: 'Oops... Número inválido',
            text: '_________________________________________'
        })

    }else{

        // se a outra condição for falsa, irá cair nessa, na qual, o 1° elemento do número digitado se o resto da divisão dele por 2 for igual a zero
        if ( number[0] % 2 == 0){

            // mensagem para o usuário informando que o número escolhido é par
            Swal.fire({
                icon: 'success',
                title: 'O seu número é par',
                showConfirmButton: false,
                timer: 1500
            })

        } else {

            // se o 1° elemento do número digitado, não tiver o resto da sua divisão por 2 com resto 0... 
            // mensagem para o usuário informando que o número escolhido é ímpar
            Swal.fire({
                icon: 'success',
                title: 'O seu número é ímpar',
                showConfirmButton: false,
                timer: 1500
            })

        }

    }
}
