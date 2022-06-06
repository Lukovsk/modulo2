/* 
=======================
Funções
======================= 
*/

// Função que recebe o valor da quantidade, o operador como argumento do botão, calcula o resultado da soma/subtração e, no fim, define o resultado como valor do input
function Calculate(operador) {

    var x = Number(document.getElementById('quantidade').value);
    // Aqui é escolhido o que fará com o resultado (acrescer 1 ou diminuir 1) a depender do argumento da função.
    if (operador == "+") {
        result = x + 1;
    };
    if (operador == "-") {
        result = x - 1;
    };

    document.getElementById('quantidade').value = result; // mostra o resultado
};


