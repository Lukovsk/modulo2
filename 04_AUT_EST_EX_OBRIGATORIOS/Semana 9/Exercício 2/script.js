/* 
=======================
Funções
======================= 
*/

// Função que é chamada pelo botão e pega a centena do valor a partir de uma divisão por 100 e seu valor piso. Depois ela diz se esse valor é par ou ímpar
function Calculate() {
    valor = String(document.getElementById('valor').value);
    // objetivo: formar uma lista com cada algarismo do valor e depois somar cada item da lista
    // formar uma lista com cada algarismo do valor:
    var i = 0
    var lista = Array.from(valor);
    console.log(lista);
    var resultado = 0;
    while (i < lista.length) {
        resultado += Number(lista[i]);
        console.log(resultado + " and " + lista[i])
        i++
    };


    document.getElementById('calc').innerHTML = "<h3> A soma dos algarismos desse número é " + resultado + ". </h3>";
};
