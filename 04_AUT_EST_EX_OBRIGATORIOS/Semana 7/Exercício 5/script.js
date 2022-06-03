/* 
=======================
Funções
======================= 
*/

// meio macabro e talvez antiético, mas essa função CRIA a quantidade de "servos escolares" que o professor quiser
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

// esse é mais justo, calcula todas aquelas coisas lá de média, nota, sla oq
function Calculate() {
    debugger
    // média de cada aluno:
    let k = 0; // para o array
    var numeradorMedia = 0; // para fazer a média geral depois
    var numeradorMediaProvas = 0; // para fazer a média das provas depois
    var numeradorMediaTrabalhos = 0; // para fazer a média dos trabalhos depois 
    var maiorNotaProva = 0; // para saber o valor da maior nota das provas
    var maiorNotaTrabalho = 0; // para saber o valor da maior nota dos trabalhos
    var alunoMaiorNotaProva = 0; // para saber quem tirou a maior nota nas provas
    var alunoMaiorNotaTrabalho = 0; // para saber quem tirou a maior nota nos trabalhos
    var menorNotaProva = 0; // para saber o valor da menor nota das provas
    var menorNotaTrabalho = 0; // para saber o valor da menor nota dos trabalhos
    var alunoMenorNotaProva = 0; // para saber quem tirou a menor nota nas provas
    var alunoMenorNotaTrabalho = 0; // para saber quem tirou a menor nota nos trabalhos

    while (k < quantidadeAlunos) {
        idnotaProva = String("notaProva" + String(k + 1)); // tenho medo de colocar isso ali no getElementById e dar ruim, então fiz separado
        prova = Number(document.getElementById(idnotaProva).value); // recebe o valor de cada nota de prova
        idnotaTrabalho = String("notaTrabalho" + String(k + 1)); // idem
        trabalho = Number(document.getElementById(idnotaTrabalho).value); // idem para trabalho

        media = ((2 * prova + 3 * trabalho) / 5); // média de cada aluno
        numeradorMedia += media; // para a média geral
        numeradorMediaProvas += prova; // para a média das provas
        numeradorMediaTrabalhos += trabalho; // para a média dos trabalhos

        // para os esquemas de descobrir quais são as maiores e menores notas
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


        document.getElementById("listaMédias").innerHTML += `<br /> <label> Aluno ${k + 1}: Média <span id="media${k + 1}"> ${media} </span> </label>`; // pra cada aluno adiciona sasfita

        k++ // while é melhor que for
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
