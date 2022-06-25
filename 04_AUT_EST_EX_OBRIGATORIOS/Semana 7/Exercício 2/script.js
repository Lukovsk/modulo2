/* 
=======================
Funções
======================= 
*/

// Função que troca os valores
function Troca() {

    var valor1 = document.getElementById('valor1').value; // armazena o que estiver no primeiro input
    var valor2 = document.getElementById('valor2').value; // armazena o que estiver no segundo input

    document.getElementById('valor1').value = valor2; // o que estava no primeiro input vira o que estava no segundo input
    document.getElementById('valor2').value = valor1; // o que estava no segundo input vira oq ue estava no primeiro input
};