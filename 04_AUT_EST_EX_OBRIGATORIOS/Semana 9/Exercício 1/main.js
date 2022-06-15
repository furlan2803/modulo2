
function buttonCalcSoma() {

    const number = document.getElementById('form1').value;

    if (number >= 1000){

        Swal.fire({
            icon: 'error',
            title: 'Oops... Número inválido',
            text: '_________________________________________'
        })

    }else{

        if ( number[0] % 2 == 0){
            console.log("foi");
            console.log(number[0]);

            Swal.fire({
                icon: 'success',
                title: 'O seu número é par',
                showConfirmButton: false,
                timer: 1500
            })

        } else {

            Swal.fire({
                icon: 'success',
                title: 'O seu número é ímpar',
                showConfirmButton: false,
                timer: 1500
            })

        }

    }
}
