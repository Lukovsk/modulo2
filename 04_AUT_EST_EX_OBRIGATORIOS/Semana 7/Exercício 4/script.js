/* 
=======================
Funções
======================= 
*/
var calc = "#calc";

// Função que é chamada pelo botão, eu só gosto de fazer assim Thaís, desculpa.
function Calculate() {
    debugger
    var select = document.getElementById('periodo');
    var periodo = select.options[select.selectedIndex].value; // coisinha pra pegar valor da opção

    var quantidade = Number(document.getElementById('quantidade').value); // quantidade de passageiros

    
    var preço = Calc(quantidade, periodo); // receita do mano
    document.getElementById("calc").innerHTML = `<br /> Com essa quantidade de passageiros, a receita da viagem será de ${preço} reais no total.`;
};

/* Função que calcula a receita da pessoa baseada na quantidade de pessoas (x) e no período selecionado (t) */
function Calc(x, t) {
    debugger 
    var result;
    if (t == "diurno") {
        if (x > 50) {
            result = 200 * x * 0.6;
        } else {
            result = 200 * x;
        };
    };

    if (t == "noturno") {
        if (x > 50) {
            result = 100 * x * 0.8;
        } else {
            result = 100 * x;
        };
    };

    return result;
}