/* 
=======================
Função
======================= 
*/

// Função que é chamada pelo botão e pega a centena do valor a partir de uma divisão por 100 e seu valor piso. Depois ela diz se esse valor é par ou ímpar
function Calculate() {
    valor = document.getElementById('valor').value;

    var centena = Math.floor(valor / 100); // divide o valor pedido por 100, pegando o valor da centena

    var resultado;
    // esse if verifica se a centena é par ou impar a partir do resto pela divisão por 2
    if (centena % 2 == 0) {
        resultado = "par";
    } else {
        resultado = "ímpar";
    };

    // printa o resultado
    document.getElementById('calc').innerHTML = "<h3> A centena desse valor é " + resultado + ". </h3>";
};
