// função que é chamada quando o botão for clicado no HTML
function buttonCalcSoma() {

    // variável responsável por pegar o valor do input pelo seu id
    const number = document.getElementById('form1').value;
    // variável responsável por armazenar o resultado da operação
    let result = 0;
    // lista criada para separar os números digitados individualmente, sendo possível realizar a soma
    let list = [];


    // condição, se o número digitado for menor que 0 ou o campo do "input" estiver vazio
    if (number < 0 || number == ""){

        // mensagem para o usuário, exibindo que o número escolhido é inválido
        Swal.fire({
            icon: 'error',
            title: 'Oops... Número inválido',
            text: '_________________________________________'
        })

    }else{

        // caso o número for válido, ele entra no for, onde irá rodar, até que i seja menor que o "number.length"
        for (let i = 0; i < number.length; i++) { 

            // toda vez que passar pelo for, o comando list.push vai inserir um valor na array, além de transformar o número digitado em um inteiro
            list.push(parseInt(number[i]));
            // atribui a variável resultado o valor dos elementos separados da variável number, além de soma-los. Por exemplo: 365, ele passa primeiro o 3, depois passa o 6 (soma o 6 com o 3), passa o 5 (soma o 5 com 9), resultado da 14. 
            result += parseInt(number[i]);
        }

        // mensagem ao usuário, monstrando o resultado da sua soma
        Swal.fire({
            icon: 'success',
            title: 'A soma dos números é   ' + result,
            showConfirmButton: false,
            timer: 1500
        })

    }
}
