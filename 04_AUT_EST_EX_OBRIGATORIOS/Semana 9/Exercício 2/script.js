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
    // o método Array.from faz todos os caracteres do número entrarem em um array separadamente
    var lista = Array.from(valor); // constrói um array com todos os algarismos de "valor"
    // ex.: se valor = 1234, então Arra.from(valor) retorna ["1", "2", "3", "4"] como string mesmo
    console.log(lista);
    var resultado = 0;

    // soma todos os array na varíavel "resultado"
    while (i < lista.length) {
        resultado += Number(lista[i]); // depois, adiciona ao resultado todos os valores sem o formato string
        // console.log(resultado + " and " + lista[i])
        i++
    };

    // printa esses resultado que é a soma de todos os valores do array (e cada valor é um algarismo do número pedido)
    document.getElementById('calc').innerHTML = "<h3> A soma dos algarismos desse número é " + resultado + ". </h3>";
};
