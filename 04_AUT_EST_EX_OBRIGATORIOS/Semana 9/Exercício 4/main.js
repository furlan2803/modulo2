// função é iniciada quando um botão no html é clicado
function buttonCalcSoma() {

    // variável abaixo pega o valor do input atravpes do seu id no html
    let termo = document.getElementById('form1').value;
    // a variável abaixo pega o valor do input antes armazenado e tranforma ele em um número inteirp
    let termoInt = parseInt(termo);
    // a variável abaixo cria uma lista de números 
    let list_termos = [1, 1];
    // a variável abaixo é utilizada para adicionar números a sequência já existente e inicia-se nula
    let termos_add = null;
    // a variável abaixo vai ser utilizada como um auxiliar
    let aux = 0;

    // condição se o botão for clicado com o input vazio
    if (termo == ""){

        // mensagem ao usuário, informando que o termo é inválido
        Swal.fire({
            icon: 'error',
            title: 'Oops... termo inválido',
            text: '_________________________________________'
        })

    } else {

        // caso o valor do input seja preenchido, ele cai em um "while"
        // enquanto a variável auxiliar for menor que o termo digitado, ele irá rodar
        while (aux <= termoInt){

            // pega a variável de adição, e soma os itens da lista, aux com aux + 1
            termos_add = list_termos[aux] + list_termos[aux + 1];
            // exemplo: na primeira vez que passa pelo comando: 
            // termos_add = 0 + (0 + 1)
            // termos_add = 1 ( aux recebe o valor 1, pois a primeira conta que é feita, é dentro dos parênteses) + 1
            // termos_add = 2
        

            // o comando list_termos.push vai inserir um valor na array criada anteriormente
            list_termos.push(termos_add); 
            
            // acrescenta 1 no valor da variável aux
            aux++
        }
        
        // mensagem de sucesso ao usuário, com o valor do termo e da posição na sequência de fibonacci
        Swal.fire({
            icon: 'success',
            title: 'O número ' + list_termos[termoInt - 1] + '  é referente a posição ' + termoInt + ' na sequência fibonacci',
            showConfirmButton: true
        })

    }
}
