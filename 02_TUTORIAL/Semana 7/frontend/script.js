/* 
=======================
Declaração de variáveis
=======================
*/

var calcResDiv = "#calc";
var getResDiv = "#get";
var getDBResDiv = "#getDB";
/* 
=======================
Event Listener
=======================
*/

/* A adição dessa função que "escuta" um evento permite que 
   verifiquemos se a página foi carregada para só então chamar
   a função CalcAddAndShow, pois ela só funcionará depois da 
   criação da div de resultado, com id "result" */
$(document).ready(function () {
    var x0 = 10, y0 = 20;
    CalcAddAndShow(x0, y0);
});


/* 
=======================
Funções
======================= 
*/

/* Função que calcula uma soma e mostra a operação realizada e o resultado obtido */
function CalcAddAndShow(x, y) {
    var op = "+";
    var result = Calc(x, y, op);
    ShowOp(x, y, op);
    ShowResult(result);
};

function MultAddAndShow(x, y) {
    var op = "*";
    var result = Calc(x, y, op);
    ShowOp(x, y, op);
    ShowResult(result);
};

function PotAddAndShow(x, y) {
    var op = "^";
    var result = Calc(x, y, op);
    ShowOp(x, y, op);
    ShowResult(result);
};

function DivAddAndShow(x, y) {
    var op = "/";
    var result = Calc(x, y, op);
    ShowOp(x, y, op);
    ShowResult(result);
};

function SayTruth(truth) {
    truth = document.getElementById('verdade').value;
    if (truth == "Alexandre") {
        ShowTruth("É verdadeiramente uma honra estar ao lado do Alexandre.");
    };
    if (truth == "Vitoria") {
        ShowTruth("A Vitória é a coisa mais linda que existe.");
    };
    if (truth == "Vinicius") {
        ShowTruth("Vinicius é o cara mais maneiro que existe.");
    };
    if (truth == "Kil") {
        ShowTruth("Kil é uma das pessoas mais legais que existe.");
    };
    if (truth == "Zaidan") {
        ShowTruth("Clarinha é a ScrumMaster mais resenha e divertida que existe.");
    };
    if (truth == "Stefano") {
        ShowTruth("Stefano possui o gosto musical mais diferenciado do grupo.");
    };
};

/* Função que calcula uma operação entre dois números recebidos como parâmetro */
function Calc(x, y, op) {
    var result;
    if (op == "+") {
        result = x + y;
    };
    if (op == "*") {
        result = x * y;
    };
    if (op == "^") {
        result = x ** y;
    };
    if (op == "/") {
        result = x / y;
    }
    return result;
}


/* Função que mostra a operação realizada */
function ShowOp(x, y, op) {
    $(calcResDiv).append(`<br />${x} ${op} ${y} = `);
    // Alternativa: .. += "<br />" + x + " " + op + " " + y + " = "
}


/* Função que mostra o resultado obtido */
function ShowResult(res) {
    $(calcResDiv).append(res);
}

/* Função que faz uma requisição GET */
function TestGET() {
    var url = "https://jsonplaceholder.typicode.com/todos/1";

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    $(getResDiv).append("<br />" + xhttp.responseText);
    $(getResDiv).append("<br />Seleção do <i>title</i>: " + JSON.parse(xhttp.response).title);
    console.log(xhttp.responseText);
}

/* Função que faz uma requisição GET */
function TestGETDB() {
    var url = "http://127.0.0.1:3071/users";
    var resposta;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send(); // A execução do script para aqui até a requisição retornar do servidor

    resposta = JSON.parse(xhttp.responseText);

    $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
    $(getDBResDiv).append("<br /><br />* Seleção do atributo 'title' do primeiro usuario: <br />" + resposta[0].title);
    console.log(xhttp.responseText);

}