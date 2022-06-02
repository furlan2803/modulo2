function btnEnvio(){

    const valor = {
        texto: document.querySelector("#validar")
    }
    
    valor.telefoneInput = document.querySelector("#form1");

    const formatoTelefone = /^\([1-9]{2}\)(?:[2-8]|[1-9][1-9])[0-9]{3}\-[0-9]{4}$/g.test(valor.telefoneInput.value);

    if(formatoTelefone) {
        alert("Formato de número de telefone aceito!")
        
    } else {
        alert("O número de telefone não está em um formato aceito! \n \n Utilize (XX)XXXXX-XXXX")
    }
}


  



  


  



