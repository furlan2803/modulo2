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

$("#myFunction").click(function(){
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    console.log("clicou")
});




function visualizarEventos() {
    
    const inputTituloAssistidos = document.querySelector("input[name='titulo']").value;
    const inputDescricaoAssistidos = document.querySelector("input[name='data']").value;

    var settingss = {
        "url": "http://127.0.0.1:3081/cadastroinsert",
        "method": "POST",
        "timeout": 0,
        "data": {
            "nomeCad": inputTituloAssistidos,
            "nascimentoCad": inputDescricaoAssistidos,
            "chamadoCad": inputTituloAssistidos,
            "documentoCad": inputTituloAssistidos
        }
      };
      
      $.ajax(settingss).done(response => {
          console.log(response)
      });

      console.log("foi")
}