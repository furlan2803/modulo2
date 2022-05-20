const calculoBtn = document.querySelector("#CalculoBtn");
const resultado = document.querySelector(".resultado");

function ordenacaoBolha(itens) {


    let { length } = itens

    for (let i = 0; i < length; i++) {

          for (let j = 0; j < (length - i - 1); j++) { 
                if(itens[j] > itens[j+1]) {
                    let valorTemporario = itens[j]; 
                    itens[j] = itens[j+1]; 
                    itens[j+1] = valorTemporario;
                    console.log(itens);            }
        }

    }

    return itens;
}

function buscaBinaria(vetor, focus) {

    let elementoFoco = {
        posicao: 0,
        foiEncontrado: false,
    }

    let ultimaPosicao = vetor.length - 1;

    while (elementoFoco.posicao <= ultimaPosicao && !elementoFoco.foiEncontrado) {

        meioDaLista = Math.ceil((elementoFoco.posicao + ultimaPosicao) / 2);
        
        if (vetor[meioDaLista] == focus) {

            elementoFoco.posicao = meioDaLista;
            elementoFoco.foiEncontrado = true;

        }
        else {

            if (focus < vetor[meioDaLista]) {
                ultimaPosicao = meioDaLista - 1;
            }
            else {
                elementoFoco.posicao = meioDaLista+1;
            }

        }
    }

    return elementoFoco;
}

function calcular() {

    let valoresDaLista = document.querySelector("#ValoresDaLista").value;
    let valorFocus = parseInt(document.querySelector("#ValorFocus").value);

    valoresDaLista = valoresDaLista.split(",");

    valoresDaLista.forEach((valor, i) => {
        valoresDaLista[i] = parseInt(valor);
    })

    let listaOrdenada = ordenacaoBolha(valoresDaLista);

    let elementoFoco = buscaBinaria(listaOrdenada, valorFocus);

    resultado.innerHTML = `
    
        <span>Ordenação da lista escolhida de forma crescente é: ${listaOrdenada}</span>
        <span>${elementoFoco.foiEncontrado ? `O valor foco encontra-se na posição ${elementoFoco.posicao} da lista ordenada.` : `<br/>O valor foco não foi encontrado na lista!`}</span>
    `
}