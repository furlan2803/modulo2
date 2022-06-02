// Pegar os ID dos inputs
const text1 = document.getElementById('form1');
const text2 = document.getElementById('form2');

// Pegar os valores dos inputs e com a ajuda de uma variável auxiliar trocar seus valores
function TrocarElementos(){
    const aux = text1.value;
    text1.value = text2.value;
    text2.value = aux;
}

//Exibir os valores trocados
function btnTroca(){
    TrocarElementos("form1", "form2");
}




