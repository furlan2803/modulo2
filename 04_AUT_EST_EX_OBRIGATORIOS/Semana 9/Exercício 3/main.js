// função é executada quando o botão é clicado no html
function buttonCalcSoma() {

    // as três constantes são responsáveis por pegar o valor do input através do seu id
    const name1 = document.getElementById('form1').value;
    const name2 = document.getElementById('form2').value;
    const name3 = document.getElementById('form3').value;

    // condição, de que nenhum campo de input pode estar vazio para o programa rodar
    if ( (name1 == "" && name2 == "" && name3 == "") || (name1 == "") || (name2 == "") || (name3 == "")){

        // caso algum campo esteja vazio, a mensagem é exibida para o usuário, falando que o nome digitado é inválido
        Swal.fire({
            icon: 'error',
            title: 'Oops... Nomes inválidos',
            text: '_________________________________________'
        })

    } else {

        // Se os campos estiverem todos preenchidos, cria-se um objeto chamado name, e dentro dele possui as três variáveis antes declaradas
        let name = [
            name1,
            name2,
            name3,
        ];

        //  Entra no for, onde irá rodar, até que i seja menor que o "name.length"
        for (let i = 0; i < name.length; i++) {

            //  Entra no segundo for, onde acrescenta a variável "j" o valor de i + 1, até que j seja menor que o "name.length"
            for (let j = i + 1; j < name.length; j++) {

                // tal condição realiza a comparação entre os nomes digitados, toda vez que o nome armazenado na variável i for maior do que o armazenado na variável j, a ordenação ocorre
                if (name[i] > name[j]) {

                    // a variável ordenação é utilizada como uma auxiliar, para mostrar ao usuário a ordenação dos nomes em forma crescente
                    let ordenacao = name[i];
                    name[i] = name[j];
                    name[j] = ordenacao;

                }
            }
        }
        
        // depois que toda a ordenação é realizada, a mensagem de sucesso é exibida ao usuário, com a ordem crescente dos nomes
        Swal.fire({
            icon: 'success',
            title: 'A ordem crescente dos nomes é: \n\n' + " 1° "+ name[0] + " \n2° " + name[1] + " \n3° " + name[2],
            showConfirmButton: true
        })

    }
}

    