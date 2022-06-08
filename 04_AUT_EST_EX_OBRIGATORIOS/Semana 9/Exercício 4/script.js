/* 
=======================
Funções
======================= 
*/

// Função que é chamada pelo botão, pega o valor do input e coloca a série de fibonacci até esse valor
function Calculate() {
    // pega o valor do input
    valor = document.getElementById('valor').value;


    // calcula a série de fibonacci
    // na verdade, calcula cada número e já adiciona na página
    var i = 0;
    valor1 = 1;
    valor2 = 1;
    fibonacci = [];
    while (i < valor) {
        var novoValor = valor1 + valor2;
        valor1 = valor2;
        valor2 = novoValor;
        fibonacci.push(novoValor)
        // console.log(fibonacci)
        i++
    }

    var tx = '';
    var j = 0;
    while (j < valor) {
        tx += `<p  class="listaBox"> ${fibonacci[j]} </p>`;
        j++
    }
    document.getElementById('calc').innerHTML = tx;
};
