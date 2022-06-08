/* 
=======================
Funções
======================= 
*/

// Função que é chamada pelo botão e pega a centena do valor a partir de uma divisão por 100 e seu valor piso. Depois ela diz se esse valor é par ou ímpar
function Calculate() {
    valor = document.getElementById('valor').value;

    var centena = Math.floor(valor / 100);

    var resultado;
    if (centena % 2 == 0) {
        resultado = "par";
    } else {
        resultado = "ímpar";
    };

    document.getElementById('calc').innerHTML = "<h3> A centena desse valor é " + resultado + ". </h3>";
};
