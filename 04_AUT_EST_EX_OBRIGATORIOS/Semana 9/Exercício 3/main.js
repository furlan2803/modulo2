
function buttonCalcSoma() {


    const name1 = document.getElementById('form1').value;
    const name2 = document.getElementById('form2').value;
    const name3 = document.getElementById('form3').value;

    if ( (name1 == "" && name2 == "" && name3 == "") || (name1 == "") || (name2 == "") || (name3 == "")){

        Swal.fire({
            icon: 'error',
            title: 'Oops... Nomes inválidos',
            text: '_________________________________________'
        })

    } else {

        let name = [
            name1,
            name2,
            name3,
        ];

        for (let i = 0; i < name.length; i++) {

            for (let j = i + 1; j < name.length; j++) {

                if (name[i] > name[j]) {

                    let ordenacao = name[i];
                    name[i] = name[j];
                    name[j] = ordenacao;

                }
            }
        }
        
        Swal.fire({
            icon: 'success',
            title: 'A ordem crescente dos nomes é: \n\n' + " 1° "+ name[0] + " \n2° " + name[1] + " \n3° " + name[2],
            showConfirmButton: true
        })

    }
}

    