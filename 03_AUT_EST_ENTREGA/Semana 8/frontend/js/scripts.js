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

 
const tableBody = document.getElementById("eventos2");

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