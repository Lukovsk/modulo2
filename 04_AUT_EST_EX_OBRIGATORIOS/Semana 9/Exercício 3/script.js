/* 
=======================
Funções
======================= 
*/

// Função que é chamada pelo botão e coloca os nomes em ordem alfabética
function Ordenate() {
    // pega os três valores de nomes e coloca numa listaNomes de nomes
    listaNomes = [];
    nome1 = document.getElementById('nome1').value;
    listaNomes.push(nome1);
    nome2 = document.getElementById('nome2').value;
    listaNomes.push(nome2);
    nome3 = document.getElementById('nome3').value;
    listaNomes.push(nome3);

    var i = 0;
    var j = 0;
    // famigeradíssimo bubble sort
    while (i < listaNomes.length) { // pra cada termo no array, faz o seguinte:
        while (j < listaNomes.length) { // verifica se o valor de cada posição é maior que o valor da posição seguinte
            if (listaNomes[j] > listaNomes[j + 1]) { // se for
                tmp = listaNomes[j]; // armazena o maior valor em uma variável temporária
                listaNomes[j] = listaNomes[j + 1]; // faz o valor da primeira posição se tornar o da segunda (que é menor)
                listaNomes[j + 1] = tmp; // e faz o segundo valor se tornar o da primeira
                console.log(listaNomes) // isso faz com que ele troque os valores maiores com os menores
            }
            j++
        }
        i++
    } // isso vai ficar se repetindo o várias vezes até o while passar por todas as posições e não verificar um número maior antes do número menor

    var tx = '';
    var k = 0;
    // depois disso printa tudo numa listinha
    while (k < listaNomes.length) {
        tx += `<h3  class="listaBox"> ${listaNomes[k]} </h3>`;
        k++
    }
    document.getElementById('calc').innerHTML = tx;
};
