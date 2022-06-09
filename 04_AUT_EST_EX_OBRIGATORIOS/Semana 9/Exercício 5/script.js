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
    // console.log(extremos);
    // pronto, agora temos uma lista ordenada do n1 até o n2
    // precisamos encontrar os números primos agora
    /* var i = 0;
    var primo;
    while (intervaloCompleto[i] < max) {
        var divisores = 2;
        console.log(`número testado agora é o ${intervaloCompleto[i]}`)
        while (divisores < intervaloCompleto[i]) {
            if (intervaloCompleto[i] % divisores == 0) {
                primo = false;
                console.log(primo)
            } else {
                primo = true;
                console.log(primo)
            };
            if (primo == true) {
                listaPrimos.push(intervaloCompleto[i]);
                console.log(`lista de primos: ${listaPrimos}`);
            };
            divisores++
        }

        i++
    } */

    // var listaPrimos = [];
    // debugger
    // for (let i = 0; i < Number(intervaloCompleto.length - 1); i++) {

    //     for (let divisor = 2; divisor < intervaloCompleto[i]; divisor++) {
    //         if (!(intervaloCompleto[i] % divisor == 0)) {
    //             listaPrimos.push(intervaloCompleto[i]);
    //         };
    //     };

    // };
    // console.log(listaPrimos)

    // function primeNumber(num) {
    //     for (var divisor = 2; divisor < num; divisor++)
    //         if (num % divisor == 0) return false;
    //     return true;
    // }

    // var determinadoNumero = max;

    // for (var i = 2; i < determinadoNumero; i++) if (primeNumber(i)) console.log(i);

};
