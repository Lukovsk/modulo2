/* 
=======================
Funções
======================= 
*/

// Função que recebe o valor da quantidade, o operador como argumento do botão, calcula o resultado da soma/subtração e, no fim, define o resultado como valor do input
function Calculate(operador) {

    var x = Number(document.getElementById('quantidade').value);
    var op = operador;
    var result = Calc(x, op);
    // console.log(op);

    ShowResult(result);
};

/* Função que soma ou subtrai do valor que tá no input e retorna o resultado dessa operação */
function Calc(x, op) {
    var result;
    if (op == "+") {
        result = x + 1;
    };
    if (op == "-") {
        result = x - 1;
    };
    return result;
}

/* Função que mostra o resultado obtido */
function ShowResult(res) {
    console.log(res);
    document.getElementById('quantidade').value = res;
}