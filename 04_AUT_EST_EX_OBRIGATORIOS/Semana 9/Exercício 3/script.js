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
    while (i < listaNomes.length) {
        while (j < listaNomes.length) {
            if (listaNomes[j] > listaNomes[j + 1]) {
                tmp = listaNomes[j];
                listaNomes[j] = listaNomes[j + 1];
                listaNomes[j + 1] = tmp;
                console.log(listaNomes)
            }
            j++
        }
        i++
    }

    var tx = '';
    var k = 0;
    while (k < listaNomes.length) {
        tx += `<h3  class="listaBox"> ${listaNomes[k]} </h3>`;
        k++
    }
    document.getElementById('calc').innerHTML = tx;
};
