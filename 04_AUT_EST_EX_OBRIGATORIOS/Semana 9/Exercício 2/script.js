/* 
=======================
Funções
======================= 
*/

// Função que é chamada pelo botão e ao digitar no input, pega o valor do input, separa ele em array e soma os elementos
function Calculate() {
    valor = String(document.getElementById('valor').value);
    // objetivo: formar uma lista com cada algarismo do valor e depois somar cada item da lista
    // formar uma lista com cada algarismo do valor:
    var i = 0
    var lista = Array.from(valor); // constrói um array com todos os algarismos de "valor"
    // ex.: se valor = 1234, então Arra.from(valor) retorna ["1", "2", "3", "4"] como string mesmo
    console.log(lista);
    var resultado = 0;
    while (i < lista.length) {
        resultado += Number(lista[i]); // depois, adiciona ao resultado todos os valores sem o formato string
        // console.log(resultado + " and " + lista[i])
        i++
    };


    document.getElementById('calc').innerHTML = "<h3> A soma dos algarismos desse número é " + resultado + ". </h3>";
};
