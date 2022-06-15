
function buttonCalcSoma() {

    const number = document.getElementById('form1').value;
    let result = 0;
    let list = [];

    if (number < 0 || number == ""){

        Swal.fire({
            icon: 'error',
            title: 'Oops... Número inválido',
            text: '_________________________________________'
        })

    }else{

        for (let i = 0; i < number.length; i++) { 

            list.push(parseInt(number[i]));
            result += parseInt(number[i]);
        }

        Swal.fire({
            icon: 'success',
            title: 'A soma dos números é   ' + result,
            showConfirmButton: false,
            timer: 1500
        })

    }
}
