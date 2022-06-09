/* 
=======================
Funções
======================= 
*/

/* Enunciado: Elabore um programa que, dados dois números naturais n1 e n2, representando um intervalo fechado [n1, n2], exibe todos os números primos no intervalo */

// Função que é chamada pelo botão, cria um intervalo entre dois números e seleciona todos os primos desse intervalo
function Calculate() {
    // pega o valor do input
    input = document.getElementById('intervalo').value; // ex.: "5,10"
    var extremos = JSON.parse("[" + input + "]"); // coloca essa lista no formato de um array ex.: [5, 10]
    // console.log(`peguei o ${input} e transformei em ${extremos}`);
    // cria um intervalo com os números inteiros entre n1 e n2
    var min = extremos[0];
    var max = extremos[1];
    // console.log(`min = ${min} e max = ${max}`);
    // console.log(extremos);
    extremos.pop(); // tira o 10 do final, ele será adicionado no final do loop a seguir
    // console.log(extremos);
    while (min < max) {
        var meio = min + 1;
        extremos.push(meio);
        min++
    }
    var intervaloCompleto = extremos;

    var listaPrimos = [];

    var primo = false;
    for (var i = 0; i < max; i++) { // para cada número menor que o valor máximo da lista, faz o seguinte:
        // verifica se é primo
        for (var divisor = 2; divisor < intervaloCompleto[i]; divisor++) { // para verificar se é primo, veja se o resto da divisão do número verificado "intervaloCompleto[i]" e todos os divisores MENORES do que esse número
            if (intervaloCompleto[i] % divisor != 0) { // se esse resto for diferente de zero, então o "invervaloCompleto[i] e o divisor verificado são primos entre si
                primo = true;
            }
            if (intervaloCompleto[i] % divisor == 0) { // porém, se a de cima for falsa, eles não são primos entre si e, portanto, o "intervaloCompleto[i]" NÃO É PRIMO, portanto, vamos parar esse segundo "for" aqui e verificar um novo número do intervalo
                primo = false; // define falso pra caso em algum momento der true ele já tirar
                divisor = intervaloCompleto[i]; // isso faz com que esse for acabe já que negativa a condição dele
            }
        }
        if (primo == true) { // se no final desse "for" ele passar pelo primeiro if todas as vezes, então o número é primo, se for, printa:
            console.log(intervaloCompleto[i])
            listaPrimos.push(intervaloCompleto[i])
        }
    }

    var tx = '';
    var j = 0;
    while (j < listaPrimos.length) {
        tx += `<p  class="listaBox"> ${listaPrimos[j]} </p>`;
        j++
    }
    document.getElementById('calc').innerHTML = tx;

};
