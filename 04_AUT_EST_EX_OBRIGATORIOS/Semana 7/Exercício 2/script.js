/* 
=======================
Funções
======================= 
*/

// Função que troca os valores
function Troca() {

    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;

    document.getElementById('valor1').value = valor2;
    document.getElementById('valor2').value = valor1;
};