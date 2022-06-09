window.addEventListener('DOMContentLoaded', event => {

    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };
    
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

// Função responsável por abrir e fechar a Div com o trailer do jogo Edu Fin App, com JQuerry, quando um botão for clicado

$("#myFunction").click(function(){
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    console.log("clicou")
});

 

// constante responsável por pegar o id da lista de eventos no HTML
const tableBody = document.getElementById("eventos2");


// Código ajax responsável por pegar os dados dos eventos cadastrados no banco de dados e apresenta-los em forma de lista na página HTML quando o node estiver em funcionamento. 
$.ajax({
    url: "http://127.0.0.1:3022/usersvisualizar",
    type: 'GET',
    success: data => {
        data.forEach(element => {
            const div = document.createElement("li");
        div.innerHTML = `
       
            <li>
                <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                <h3>${element.Nome}</h3>
                <p>${element.Tipo}</p>
                <p>${element.Local}</p>
                <p>${element.Ano}</p>
                <p>${element.Duracao}</p>
            </li>

        `
            tableBody.appendChild(div);
        });
    }
});