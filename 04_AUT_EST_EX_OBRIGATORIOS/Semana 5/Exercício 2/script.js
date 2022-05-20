/* 
=======================
Declaração de variáveis
=======================
*/

var calcResDiv = "calc";

/* 
=======================
Funções
======================= 
*/

/* Função que é chamada para definir o preço do produto e chama a função que calcula a quantidade de cada nota */
function Calculate() {
    var price = Number(document.getElementById('valorDinheiro').value);

    ShowResult(Calc(price));
    // ShowResult(cem, cinquenta, vinte, dez, cinco, dois, um);
};

/* Função que calcula a quantidade de cada nota */
function Calc(price) {
    debugger
    var cem = 0;
    var cinquenta = 0;
    var vinte = 0;
    var dez = 0;
    var cinco = 0;
    var dois = 0;
    var um = 0;

    if (price >= 100) {
        cem = Math.floor(price / 100);
        price = price - cem * 100;
    };
    if (price >= 50) {
        cinquenta = Math.floor(price / 50);
        price = price - cinquenta * 50;
    };
    if (price >= 20) {
        vinte = Math.floor(price / 20);
        price = price - vinte * 20;
    };
    if (price >= 10) {
        dez = Math.floor(price / 10);
        price = price - dez * 10;
    };
    if (price >= 5) {
        cinco = Math.floor(price / 5);
        price = price - cinco * 5;
    };
    if (price >= 2) {
        dois = Math.floor(price / 2);
        price = price - dois * 2;
    };
    if (price >= 1) {
        um = Math.floor(price / 1);
        price = price - um * 1;
    };

    return [`${um} notas de um <br /> ${dois} notas de dois <br /> ${cinco} notas de cinco <br /> ${dez} notas de dez <br /> ${vinte} notas de vinte <br /> ${cinquenta} notas de cinquenta e <br /> ${cem} notas de cem`];
};

/* Função que mostra o resultado obtido */
function ShowResult(res) {
    // $(calcResDiv).append(`<br /> ${res}`);

    document.getElementById(calcResDiv).innerHTML = `<br /> ${res}`;
};