//função quando o botão de validar número é clicado
function btnEnvio(){

    // variável para pegar o input de validação de número
    const valor = {
        texto: document.querySelector("#validar")
    }
    
    valor.telefoneInput = document.querySelector("#form1");

    // variável para comparar o valor digitado com a RegEx estipulada 
    const formatoTelefone = /^\([1-9]{2}\)(?:[2-8]|[1-9][1-9])[0-9]{3}\-[0-9]{4}$/g.test(valor.telefoneInput.value);

    // Caso o valor for aceito tem a condição de válido ou não válido
    if(formatoTelefone) {
        alert("Formato de número de telefone aceito!")
        
    } else {
        alert("O número de telefone não está em um formato aceito! \n \n Utilize (XX)XXXXX-XXXX")
    }
}


  



  


  



