const alunos = document.getElementById('form1');
const resultado = document.getElementById("resultados");

function btnEnvio(){

    var valor = parseInt(alunos.value);

    const TabelaNotas = document.getElementById("table");

    for(let i = 0; i < valor; i++){

        TabelaNotas.innerHTML += `

        <tr>
            <td>${i}</td>
            <td><input class="estilo" id="nome_aluno${i}" type="text" name="nomeAluno"></td>
            <td><input class="estilo" id="prova_aluno${i}" type="number" name="provaAluno"></td>
            <td><input class="estilo" id="trabalho_aluno${i}" type="number" name="trabalhoAluno"></td>
        </tr>

        `
    }

    TabelaNotas.innerHTML += `

        <br>
        <br>
        <button class="btn2" onclick="concluir()">Concluído</button>

    `
}

function concluir(){

    var array = [];
    var arrayProva = [];
    var arrayTrabalho = [];
    var mediaGeral = 0;
    var mediaGeralCalc = 0;
    var mediaProva = 0;
    var mediaProvaCal = 0;
    var mediaTrabalho = 0;
    var mediaTrabalhoCalc = 0;
    var maiorNotaProva = 0;
    var menorNotaProva = 10;
    var maiorNotaTrabalho = 0;
    var menorNotaTrabalho = 10;
    
    for (let j = 0; j < parseInt(alunos.value); j++){

        let nomeAluno = document.getElementById(`nome_aluno${j}`).value;

        let valorProva = document.getElementById(`prova_aluno${j}`);
        let notaProva = parseFloat(valorProva.value);

        let valorTrabalho = document.getElementById(`trabalho_aluno${j}`);
        let notaTrabalho = parseFloat(valorTrabalho.value);

        let media = ((notaProva * 2) + (notaTrabalho * 3)) / 5; 
        console.log("Media aluno individual " + media);


        resultado.innerHTML += `
        
        <span>A média do aluno ${nomeAluno} com o id ${j} é ${media} \n\n</span> <br><br>
    
        `
        // Média todos os alunos
        var cont = j + 1;
        array[parseInt(cont)] = media;
        mediaGeral += array[parseInt(cont)];

        // Média prova aritmética todos os alunos
        arrayProva[parseInt(cont)] = notaProva;
        mediaProva += arrayProva[parseInt(cont)];

        // Média trabalho aritmética todos os alunos
        arrayTrabalho[parseInt(cont)] = notaTrabalho;
        mediaTrabalho += arrayTrabalho[parseInt(cont)];

        // Maior nota da prova
        
        if ( notaProva > maiorNotaProva ){
            maiorNotaProva = notaProva;
        }

         // Menor nota da prova
        
        if ( notaProva < menorNotaProva ){
            menorNotaProva = notaProva;
        }

         // Maior nota do trabalho
        
         if ( notaTrabalho > maiorNotaTrabalho ){
            maiorNotaTrabalho = notaTrabalho;
        }

         // Menor nota do trabalho
        
        if ( notaTrabalho < menorNotaTrabalho ){
            menorNotaTrabalho = notaTrabalho;
        }

    }
    // Média todos os alunos
    mediaGeralCalc = mediaGeral / parseInt(alunos.value);
    console.log(mediaGeralCalc);

    // Média prova aritmética todos os alunos
     mediaProvaCal = mediaProva / parseInt(alunos.value);
     console.log(mediaProvaCal);

    // Média trabalho aritmética todos os alunos
    mediaTrabalhoCalc = mediaTrabalho / parseInt(alunos.value);
    console.log(mediaTrabalhoCalc);

    // Maior nota da provas
    console.log(maiorNotaProva);

    // Menor nota da provas
    console.log(menorNotaProva);

    // Maior nota do trabalhos
    console.log(maiorNotaTrabalho);

    // Menor nota da provas
    console.log(menorNotaTrabalho);


  
    resultado.innerHTML += `
        
    <span>A média de todos os alunos é ${mediaGeralCalc}\n</span> <br><br>
    <span>A média aritmética da prova de todos os alunos é ${mediaProvaCal}\n</span> <br><br>
    <span>A média aritmética do trabalho de todos os alunos é ${mediaTrabalhoCalc}\n</span> <br><br>
    <span>A maior nota da prova é ${maiorNotaProva}\n</span> <br><br>
    <span>A menor nota da prova é ${menorNotaProva}\n</span> <br><br>
    <span>A maior nota do trabalho é ${maiorNotaTrabalho}\n</span> <br><br>
    <span>A menor nota do trabalho é ${menorNotaTrabalho}\n</span> <br><br>

    `
}



