/* DECLARAÇÃO DE VARIÁVEIS */
const gravidade = 10;
var calcResDiv = "calc";
// 
function calcular() {
    velocidadeInicial = Number(document.getElementById("velocidadeInicial").value);
    var alturaMaxima = (velocidadeInicial ** 2) / (2 * gravidade);
    var tempoSubida = (velocidadeInicial) / (gravidade);
    ShowResult(alturaMaxima, tempoSubida, velocidadeInicial);
};
// Função que mostra a altura máxima obtida
function ShowResult(h, t, v) {
    document.getElementById(calcResDiv).innerHTML = `<br /> Lançando verticalmente um objeto com velocidade incial de ${v} metros por segundo, a <strong>Altura Máxima</strong> que o objeto alcança é de ${h} metros e demora ${t} segundos para subir até lá. <br /> `;
};