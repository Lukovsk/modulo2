/* 
=======================
Declaração de variáveis
=======================
*/

var calcResDiv = "#calc"; // variável que recebe o id da div que receberá o valor da operação

/* 
=======================
Funções
======================= 
*/

/* Função que recebe o valor da operação e os valores dos números em questão e executa as funções para calcular e mostrar as operações */
function Calculate() {
    var select = document.getElementById('operador');
    var op = select.options[select.selectedIndex].value;
    // $('#operador :selected').text();


    var x = Number(document.getElementById('valor1').value);
    var y = Number(document.getElementById('valor2').value);

    var result = Calc(x, y, op);
    ShowOp(x, y, op);
    ShowResult(result);
};

/* Função que calcula uma operação entre dois números recebidos como parâmetro */
function Calc(x, y, op) {
    var result;
    if (op == "+") {
        result = x + y;
    };
    if (op == "*") {
        result = x * y;
    };
    if (op == "^") {
        result = x ** y;
    };
    if (op == "/") {
        result = x / y;
    };
    if (op == "%") {
        result = x % y;
    };
    if (op == "-") {
        result = x - y;
    };
    return result;
}

// Essas funções mostram o resultado abaixo do botão, onde está a div cujo id é "calc"
/* Função que mostra a operação realizada */
function ShowOp(x, y, op) {
    $(calcResDiv).append(`<br />${x} ${op} ${y} = `);
}

/* Função que mostra o resultado obtido */
function ShowResult(res) {
    $(calcResDiv).append(res);
}