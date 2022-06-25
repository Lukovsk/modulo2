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
    // sequência de fibonacci começa com dois 1's
    valor1 = 1;
    valor2 = 1;
    fibonacci = [1, 1];
    while (i < valor) {
        var novoValor = valor1 + valor2; // armazena a soma dos dois valores anteriores
        valor1 = valor2; // o primeiro valor se torna o segundo
        valor2 = novoValor; // o segundo valor se torna a soma dos dois primeiros e aquele primeiro valor é perdido (ele ainda está armazenado no array fibonacci[])
        fibonacci.push(novoValor) // adiciona a soma dos dois
        // console.log(fibonacci)
        i++
    }

    // aqui, apenas estou printando na tela todos os valores do array fibonacci[] que são menores que um determinado valor
    var tx = '';
    var j = 0;
    while (j < valor) { // enquanto o valor teto que a pessoa quer que sejam gerados os fibonacci é menor que j na estrutura do loop
        tx += `<p  class="listaBox"> ${fibonacci[j]} </p>`; // adiciona na tela
        j++
    }
    // quando todos os valores até o valor que a pessoa quer forem adicionados, gera esse texto
    document.getElementById('calc').innerHTML = tx;
};
