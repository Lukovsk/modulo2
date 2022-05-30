/* 
=======================
Funções
======================= 
*/
var calc = "#calc";

// Função que recebe o valor da quantidade, o operador como argumento do botão, calcula o resultado da soma/subtração e, no fim, define o resultado como valor do input
function Calculate() {
    debugger
    var select = document.getElementById('periodo');
    var periodo = select.options[select.selectedIndex].value;

    var quantidade = Number(document.getElementById('quantidade').value);

    var preço = Calc(quantidade, periodo);
    document.getElementById("calc").innerHTML = `<br /> Com essa quantidade de passageiros, a receita da viagem será de ${preço} reais no total.`;
};

/* Função que soma ou subtrai do valor que tá no input e retorna o resultado dessa operação */
function Calc(x, t) {
    debugger
    var result;
    if (t == "diurno") {
        if (x > 50) {
            result = 200 * x * 0.6;
        } else {
            result = 200 * x;
        };
    };

    if (t == "noturno") {
        if (x > 50) {
            result = 100 * x * 0.8;
        } else {
            result = 100 * x;
        };
    };

    return result;
}