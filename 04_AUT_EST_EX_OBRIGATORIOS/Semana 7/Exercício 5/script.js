/* 
=======================
Funções
======================= 
*/
var calc = "#calc";

function CriarAlunos() {
    debugger
    quantidadeAlunos = Number(document.getElementById('quantidadeAlunos').value);
    let i = 0;
    while (i < quantidadeAlunos) {
        document.getElementById("listaAlunos").innerHTML += `<br /> <label> ${i}: <input> </label> <input type="number" id="notaProva" placeholder="Prova"> <input type="number" id="notaTrabalho" placeholder="Trabalho">`;
        i++
    }
    document.getElementById("listaAlunos").innerHTML += `<br /> <button onclick="Calculate()" class="button-calc"> Mostrar Médias </button>`;
}
// Função que recebe o valor da quantidade, o operador como argumento do botão, calcula o resultado da soma/subtração e, no fim, define o resultado como valor do input
function Calculate() {
    

    document.getElementById("calc").innerHTML = `<br /> Com essa quantidade de passageiros, a receita da viagem será de ${preço} reais no total.`;
};
