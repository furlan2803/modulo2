
function buttonCalcSoma() {


    let termo = document.getElementById('form1').value;
    let termoInt = parseInt(termo);
    let list_termos = [1, 1];
    let termos_add = null;
    let aux = 0;

    if (termo == ""){

        Swal.fire({
            icon: 'error',
            title: 'Oops... termo inválido',
            text: '_________________________________________'
        })

    } else {


        while (aux <= termoInt){

            termos_add = list_termos[aux] + list_termos[aux + 1];

            list_termos.push(termos_add); 
            
            aux++
        }
        
        Swal.fire({
            icon: 'success',
            title: 'O número ' + list_termos[termoInt - 1] + '  é referente a posição ' + termoInt + ' na sequência fibonacci',
            showConfirmButton: true
        })

    }
}
