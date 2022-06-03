/* 
=======================
Funções
======================= 
*/

function CriarAlunos() {
    debugger
    quantidadeAlunos = Number(document.getElementById('quantidadeAlunos').value);
    let i = 0;
    while (i < quantidadeAlunos) {
        document.getElementById("listaAlunos").innerHTML += `<br /> <label> Aluno ${i + 1}: </label> <input type="number" id="notaProva${i + 1}" placeholder="Prova"> <input type="number" id="notaTrabalho${i + 1}" placeholder="Trabalho">`;
        i++
    }
    document.getElementById("listaAlunos").innerHTML += `<br /> <br /> <button onclick="Calculate()" class="button-calc"> Mostrar Médias </button>`;
}


function Calculate() {
    debugger
    // média de cada aluno:
    let k = 0;
    var numeradorMedia = 0;
    var numeradorMediaProvas = 0;
    var numeradorMediaTrabalhos = 0;
    var maiorNotaProva = 0;
    var maiorNotaTrabalho = 0;
    var alunoMaiorNotaTrabalho = 0;
    var alunoMaiorNotaProva = 0;
    var menorNotaProva = 0;
    var menorNotaTrabalho = 0;
    var alunoMenorNotaTrabalho = 0;
    var alunoMenorNotaProva = 0;

    while (k < quantidadeAlunos) {
        idnotaProva = String("notaProva" + String(k + 1));
        prova = Number(document.getElementById(idnotaProva).value);
        idnotaTrabalho = String("notaTrabalho" + String(k + 1));
        trabalho = Number(document.getElementById(idnotaTrabalho).value);

        media = ((2 * prova + 3 * trabalho) / 5);
        numeradorMedia += media;
        numeradorMediaProvas += prova;
        numeradorMediaTrabalhos += trabalho;

        if (maiorNotaProva < prova) {
            maiorNotaProva = prova;
            alunoMaiorNotaProva = k + 1;
        };
        if (maiorNotaTrabalho < trabalho) {
            maiorNotaTrabalho = trabalho;
            alunoMaiorNotaTrabalho = k + 1;
        };
        if (menorNotaProva > prova) {
            menorNotaProva = prova;
            alunoMenorNotaProva = k + 1;
        };
        if (menorNotaTrabalho > trabalho) {
            menorNotaTrabalho = trabalho;
            alunoMenorNotaTrabalho = k + 1;
        };


        document.getElementById("listaMédias").innerHTML += `<br /> <label> Aluno ${k + 1}: Média <span id="media${k + 1}"> ${media} </span> </label>`;

        k++
    }

    // média geral (considerando todos os alunos)
    mediaGeral = numeradorMedia / (k + 1);
    document.getElementById("outrasMédias").innerHTML += `<br /> A média geral da turma foi ${mediaGeral}.`;

    // a média artiméticas das notas de prova;
    // a menor e a maior notas de prova.
    mediaProvas = numeradorMediaProvas / (k + 1);
    document.getElementById("outrasMédias").innerHTML += `<br /> A média das notas das provas foi ${mediaProvas}, onde a maior nota foi ${maiorNotaProva} do aluno ${alunoMaiorNotaProva} e a menor nota foi ${menorNotaProva} do aluno ${alunoMenorNotaProva}.`;

    // a média artiméticas das notas de trabalho;
    // a menor e a maior notas de trabalho.
    mediaTrabalho = numeradorMediaTrabalhos / (k + 1);
    document.getElementById("outrasMédias").innerHTML += `<br /> A média das notas dos trabalhos foi ${mediaTrabalho}, onde a maior nota foi ${maiorNotaTrabalho} do aluno ${alunoMaiorNotaTrabalho} e a menor nota foi ${menorNotaTrabalho} do aluno ${alunoMenorNotaTrabalho}.`;

};
