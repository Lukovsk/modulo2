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
    if (t == "diurno") { // se o período for exatamente igual a "diurno" que está lá na opção do select
        if (x > 50) { // se a quantidade de pessoas for maior que 50
            result = 200 * x * 0.6; // o resultado retorna com desconto de 40%
        } else { // se for menor ou igual a 50
            result = 200 * x; // o valor é íntegro
        };
    };

    if (t == "noturno") { // se o período for exatamente giual a "noturno" que está lá na opção do select
        if (x > 50) { // se a quantidade de pessoas supera 50
            result = 100 * x * 0.8; // o valor retorna com desconto de 20%
        } else { // se for inferior ou igual a 50
            result = 100 * x; // o valor retorna íntegro
        };
    };

    return result;
}