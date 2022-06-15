
function buttonCalcSoma() {


    let number1 = document.getElementById('form1').value;
    let number2 = document.getElementById('form2').value;

    if ((number1 == "" && number2 == "") || (number1 == "") || (number2 == "")){

        Swal.fire({
            icon: 'error',
            title: 'Oops... Números inválidos',
            text: '_________________________________________'
        })

    } else {

        for ( let aux = number1; aux <= number2; aux++){

            let cont = 0;

            for( let number = 2; number < aux; number++){

                if(aux % number == 0){

                    cont++
                }
            }


            if(cont == 0 ){

                document.getElementById("result").innerHTML += aux + "<br>"

            }
        }

    }
}
