
const BtnCalc = document.querySelector("#CalculoBtn");
const resultado = document.querySelector(".resultado"); 
const btnhide = document.getElementById("btnhide");

BtnCalc.addEventListener("click", function(){

    const elements = {

        ValorDigitado: Number(document.querySelector("#Valor").value),
    }

    let Dinheiro = {

        Notas: { dois_reais: 0, cinco_reais: 0, dez_reais: 0, vinte_reais: 0, cinquenta_reais: 0, cem_reais: 0,},

        Moeda: { um_real: 0, }
    }

    let DinheiroRecebido = elements.ValorDigitado;

    while(DinheiroRecebido > 0) {

        if(DinheiroRecebido >= 100) {

            DinheiroRecebido -= 100;
            Dinheiro.Notas.cem_reais += 1;
        } 
        
        else if (DinheiroRecebido >= 50) {

            DinheiroRecebido -= 50;
            Dinheiro.Notas.cinquenta_reais += 1;
        } 
        
        else if (DinheiroRecebido >= 20) {

            DinheiroRecebido -= 20;
            Dinheiro.Notas.vinte_reais += 1;
        } 
        
        else if (DinheiroRecebido >= 10) {
            DinheiroRecebido -= 10;
            Dinheiro.Notas.dez_reais += 1;
        } 
        
        else if (DinheiroRecebido >= 5) {

            DinheiroRecebido -= 5;
            Dinheiro.Notas.cinco_reais += 1;
        } 
        
        else if (DinheiroRecebido >= 2) {
            DinheiroRecebido -= 2;
            Dinheiro.Notas.dois_reais += 1;
        } 
        
        else {
            DinheiroRecebido -= 1;
            Dinheiro.Moeda.um_real += 1;
        }
    }

    resultado.innerHTML = `
    
    <span>A menor quantidade de notas possíveis para o valor, R$${elements.ValorDigitado},00 é: </span> <br>

        <br>
        
        ${Dinheiro.Notas.cem_reais ? `${Dinheiro.Notas.cem_reais} Nota(s) de R$100,00` : '' }

        <br>

        ${Dinheiro.Notas.cinquenta_reais ? `${Dinheiro.Notas.cinquenta_reais} Nota(s) de R$50,00` : ''}

        <br>

        ${Dinheiro.Notas.vinte_reais ? `${Dinheiro.Notas.vinte_reais} Nota(s) de R$20,00` : ''}

        <br>

        ${Dinheiro.Notas.dez_reais ? `${Dinheiro.Notas.dez_reais} Nota(s) de R$10,00` : ''}

        <br>

        ${Dinheiro.Notas.cinco_reais ? `${Dinheiro.Notas.cinco_reais} Nota(s) de R$5,00` : ''}

        <br>

        ${Dinheiro.Notas.dois_reais ? `${Dinheiro.Notas.dois_reais} Nota(s) de R$2,00` : ''}

        <br>

        ${Dinheiro.Moeda.um_real ? `${Dinheiro.Moeda.um_real} Moeda(s) de R$1,00` : ''}
    
    `

    btnhide.classList.toggle("hide");
})

function Limpar(){
    btnhide.classList.toggle("hide");
}